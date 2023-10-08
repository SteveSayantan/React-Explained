import {useState,useReducer} from "react";
import Modal from "./Modal";
import {reducer} from './reducerFunc'   // The reducer function has been moved to another file for better accessibility


const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
}
const UseReducerBasics=()=>{
    const [name, setName]=useState("");
    const [state, dispatch]= useReducer(reducer,defaultState);

    /* 
        1. state is the state value similar to what we get from useState

        2. dispatch method sends or dispatches information or action to the reducer function

        3. reducer is the function which manages any change in the state value

        4. defaultState is the initial state value provided to invoke useReducer 

        5. If we use only useState, we can change the value of the state whenever and whereever we like, but with useReducer we can only do that through reducer function.
    
    */
   
    const closeModal=()=>{  // This function dispatches an action object, which is taken care of by the reducer function
        dispatch({type:'CLOSE_MODAL'})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
            const newItem= {id:new Date().getTime().toString(),name}
            dispatch({type:'ADD_ITEM',info:newItem})        // This dispatch method sends this object (aka action) to the reducer function with these properties. We can give any the name to the properties 
            setName('')
        }
        else{
            dispatch({type:'NO_VALUE'})
        }
    }
    return <>
        {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
        <form  onSubmit={handleSubmit} className="form">
            <div >
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <button type="submit">Add</button>
        </form>
        {
            state.people.map((person)=>{
                return <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={()=>dispatch({type:'REMOVE_ITEM',info:person.id})}>Remove</button>
                </div>
            })
        }
    </>
}

export default UseReducerBasics;    // As this file is named as index.js, it can be used as a default export for 6-useReducer dir i.e. we need not to specify this index.js file while importing in App.js. 
import React,{useState,useContext} from "react";
import {data} from '../../data'

const personContext= React.createContext(); // This method returns two components --> Provider and Consumer . But only the first one is used nowadays. createContext is a API, not a hook, so it can be called outside a component.

const ContextAPI= ()=>{
    const[people,setPeople]=useState(data);

    const removePerson=(id)=>{
        const newArray= people.filter((person)=>person.id!=id)
        setPeople(newArray);
    }

    // We have to find the root component and wrap that with Provider component 

    return <personContext.Provider value={{removePerson,people}} > {/* Passing the removePerson function and people statevalue to the 'value' prop, so that the child components can use it. The prop should be named as 'value' only */}
        <h3>Context API</h3>
        <List/>
    </personContext.Provider> // We can pass any datatype to 'value', passing as object (as shown) is not necessary. It is necessary for passing multiple values. If we pass a string or array as 'value' prop, we will get a string or array respectively.
}

const List=()=>{
    const mainData= useContext(personContext); 
    return <>
        {mainData.people.map((person)=><SinglePerson key={person.id} {...person}/>)}
    </>
}

const SinglePerson=({id,name})=>{
    const {removePerson}= useContext(personContext);    //useContext hook will return whatever was passed to value prop

    return <div className="item">
        <h4>{name}</h4>
        <button onClick={()=>removePerson(id)}>Remove</button>
    </div>
}

/* 
    1.First, we need to call the createContext API to get the Provider component.

    2.Instead of prop drilling, we simply wrap our root component with Provider component. 

    3.As a result, all the descendants (at any level) can use whatever is passed to the Provider (to the 'value' prop).

    4.It is useful when we have to drill a prop more than one level deep.

*/




export default ContextAPI;

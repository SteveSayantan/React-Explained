import {useState} from "react";

const useStateObject=()=>{

    const[person,setPerson]=useState({name:'Peter',age:24,message:"Hello There!!"});

    const setMessage=()=>{
        setPerson({...person,message:"Changed Message"}); //First, we destructure the values in person and update the necessary ones. If we would only provide the message property with updated message, the rest of the properties will be vanished (As it sets the state value to an object which only has a message property)
    }
    return <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className="btn" type="button" onClick={setMessage}>Change Message</button>
    </>
}
export default useStateObject;
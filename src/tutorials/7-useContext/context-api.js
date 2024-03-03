import React,{useState,useContext} from "react";
import {data} from '../../data'

// Ref video: https://youtu.be/MpdFj8MEuJA?si=BEmSnJ4U1YS7YXIz , https://react.dev/reference/react/useContext

const personContext= React.createContext(); // This method returns two components --> Provider and Consumer . But only the first one is used nowadays. createContext is a API, not a hook, so it can be called outside a component.

const ContextAPI= ()=>{
    const[people,setPeople]=useState(data);

    const removePerson=(id)=>{
        const newArray= people.filter((person)=>person.id!==id)
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

    5. We can have multiple instances of a Provider component in the same page. Each of them operate as a self-contained component.

    6. We can also use context for a small set of components instead of using it from a global perspective.

    7. Whenever the context changes i.e. the Provider's value prop changes, all the components under the Provider will re-render.


*/

const MultipleContextInstances=()=>{    // example of multiple instances of the existing Provider component.
    return <>
        <h2>This will not re-render</h2>    {/* This will not re-render because it does not belong to any Provider component */}
        <ContextAPI/>
        <hr />
        <ContextAPI/>
        <hr />
        <ContextAPI/>
    </>
}


export default ContextAPI;

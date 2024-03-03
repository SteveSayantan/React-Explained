//Hooks are function provided by React to complete various tasks

/*  General Rules of Hooks in React

    1. Names of the hook starts with "use"
    2. The name of the component which calls the hook must start with uppercase
    3. Hooks must be called inside a custom-hook or component body
    4. Hooks (Not the function which is returned from a hook) can not be called conditionally (inside if-else)

*/

// A deep dive into useState https://youtu.be/RAJD4KpX8LA

import React,{useState} from "react"; // useState is a named import, so we must keep the name exact and use curley braces


//useState is a function, it returns an array which contains a state value (the same which is provided while calling it) and a function (handler) . It preserves the value between renders and triggers re-render of the corresponding element.

const UseStateBasics=()=>{
    const[text,setText]=useState("Random Title"); //We need to provide a default value (any reference or primitive value) while calling useState. undefined is passed, if left empty.  
    
    //text is the current state value and SetText is the function returned by useState. The reference of setText function does not change with re-render.

    const handleClick=()=>{

        // setText("Hello World");  //When we invoke this function, it will change the state value with the value provided while invoking useState.
        
        if(text==="Random Title"){
            setText("Hello World")
        }
        else{
            setText("Random Title")
        }
    }
    return(
        <React.Fragment>
            <h2>{text}</h2>
            <button className="btn" onClick={handleClick}>Change Title</button>
        </React.Fragment>
    )
}

//For detailed discussion about render and re-render checkout https://github.com/john-smilga/react-course-v3/blob/main/03-advanced-react/TUTORIAL.md#initial-render-and-re-renders

export default UseStateBasics;

/* 
    Why are hooks required?
    ----------------------
    Suppose, we have a component (say, Counter) that contains a 'counter' variable initialised with 0. On each click of a button,
     the value of the counter variable increases by 1. 

     So, our Counter component has a state (i.e. the 'counter' variable ) and a side-effect (i.e. the increment of the 'counter' variable on each click ). 

     However, as per React, each of the components should be stateless and without side-effect as much as possible.

     But without side-effects we can not build real-world apps. So, we delegate all the statefull logic to some other function that have some special capabilities (provided by
        React) to manage state and side-effects . These functions are called hooks and they are reusable.

    Component Lifecycle
    -------------------
     - When it mounts
     - When the State changes
     - When the Props change
     - When the Context or Store changes
     - When the component Unmounts

*/
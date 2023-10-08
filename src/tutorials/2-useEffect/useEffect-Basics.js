import {useState,useEffect} from "react";

//useEffect allows to perform the side effects (any work outside the component) e.g. fetching data, setting up an eventlistener etc. A deep dive into useEffect https://youtu.be/dH6i3GurZW8

//By default, it runs after every re-render.

const UseEffectBasics=()=>{
    
    //We may have multiple useEffects in a component.
    const[value,setValue]=useState(0);

    useEffect(()=>{ //It takes a callback function. This function will be executed after every render. This callback function can't return a promise

        if(value>=1){ //We can set conditionals inside a hook but not the other way round, as per rules.
            document.title=`New Messages (${value})`; 
        }

    },[value]) //This second parameter (optional) takes an array of dependencies. On initial render or if any change occurs to a dependency inside the array, it will trigger the useEffect. In case of an empty array, the useEffect hook will **only** run on the initial render. In any case, it will always run on the first render. If the second parameter is omitted entirely,the hook will run after each re-render as ususal.



    //When we click on the button, the setValue function executes which triggers re-render, as a result the useEffect function is also executed.
    
    return <>
    <h2>{value}</h2>
    <button className="btn" onClick={()=>setValue(value+1)}>Click Me!!</button> 

    </>
}
export default UseEffectBasics;
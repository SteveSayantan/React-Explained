import { useEffect } from "react";
import {useState,useRef} from "react";


/* 
    Sometimes,we don't want certain functionality to work on initial render. In this example, we are going to do the same using useRef
*/
const useStateCounter=()=>{
    const[value,setValue]=useState(0);
    const isMounted=useRef(false)

    // console.log(isMounted) // Returns an object with current property equals to false
   
    useEffect(()=>{         // During the first render, as the current property is false, it will not print anything. However, from the next re-render, it will start logging
        if(!isMounted.current){
            isMounted.current=true;     // Though we are updating the value of current property, this will not re-render the component.
            return;
        }
        console.log('re-render'); // Due to React.StrictMode it may show unexpected behaviour.
    },[value])
        

    return <>
        <section>
            <h2>Regular Counter</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
        </section>
    </>
}

export default useStateCounter;
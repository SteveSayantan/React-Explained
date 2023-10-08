import { useState } from "react";

const useStateLazyInitialize=()=>{

    const complexFunction=()=>{
        console.log("complex function executed");
        return 'output of complex function'
    }

    // On initial render, this function is executed and its return value is set as the current value of the state variable
    const [value,setValue]=useState(complexFunction);   
    console.log(value);

    

    /* 
        By returning a value from the function (that is passed as an arg to useState()), we can initialize 
         the State variable lazily. The returned value is required only once during the first render,
         therefore, the function is executed only on the first render.
         
        Using this approach, we can perform any heavy calculation only once during the first render.
    */

    return <>
        <h3>
            Hello There!!The current value is {value}
        </h3>
        <button onClick={()=>setValue("Value changed")}>Click to change</button>
    </>
}

export default useStateLazyInitialize;
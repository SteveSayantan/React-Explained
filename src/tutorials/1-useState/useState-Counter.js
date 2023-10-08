import {useState} from "react";

const useStateCounter=()=>{
    const[value,setValue]=useState(0);

    const resetValue=()=>{
        setValue(0);
    }

    
    const complexIncrease=()=>{

        // setTimeout(setValue, 2000,value+1);                //In this case, as complexIncrease function is running asynchronously,even if we click the button more than once, technically the value would be increased by 1. Due to its asynchronous nature, all the setValue function calls are executed simultaneously after the interval and all of the functions consider the initial state value (i.e. not the latest value) and update it. As a result the value is incremented by 1. 

        setTimeout(setValue, 2000,(prevState)=>prevState+1); 
        /* 
            If setValue is provided with a callback function(as an argument), the callback function takes the previous state value (i.e. the latest value) each time and updates it.
            Here, we are not using the 'value' variable.

            Now, the value is updated properly when the button is clicked multiple times. But we must **return** the updated value from the callback function.
        */
    }

    return <>
        <section>
            <h2>Regular Counter</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
            <button className="btn" onClick={resetValue}>Reset</button>
            <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
        </section>

        <section style={{margin:'4rem 0'}}>
            <h2>Complex Counter</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={complexIncrease}>Complex Increase</button>
        </section>
    </>
}

export default useStateCounter;

/* 
    Why do we have to use setState to assign value to the state variable?

     If we try to do so, all the references of the state variable will be changed. Therefore, it will be very difficult to manage and
      track the changes. setState creates a new reference and compares the old and the new one. It will re-render only if a 
      change is found.
*/
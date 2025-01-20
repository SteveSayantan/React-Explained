import React,{useRef,useEffect} from "react";

/* 
    1. useRef preserves values between renders

    2. Changing it's value DOES NOT trigger re-render

    3. It is mainly used to target DOM elements

    4. Refer to the docs for further queries.

    React only allows us change the DOM through state and props, not by direct access. 'ref' gives us a direct access to a DOM element.
    Its use should be as less as possible, only for exceptional cases.

*/

const UseRefBasics=()=>{
    const refContainer= useRef(null);   // Invoking the useRef with a null value
    const divContainer= useRef(null);

    useEffect(()=>{     
        console.log(refContainer.current); // This useEffect hook runs after the component is rendered. That's why it points to the input field. The value of current property remains unchanged inspite of re-renders.
        
        refContainer.current.focus(); // This is to focus the input field as soon as the page loads
    })

    const handleSubmit= (e)=>{ //This event handler has nothing to do with useRef. It is being used to access the values only.
        e.preventDefault();

        console.log(divContainer);   // Gives an object which has a 'current' property that refers to the element to which divContainer is assigned. 
        
        // N.B. Here, we are using the event handler to access the values, nothing else. Otherwise, there is no way to access those values as ** they are returned by the JSX **. It is not about the event or the event handler, it is all about accessing the values.

        console.log(refContainer.current.value);// current property points to the element.

    }

    // console.log(refContainer,divContainer);  // Here, both will show the initial value 'null' as the assignment is not done yet. But after render, the newly assigned values can be accessed as shown in the example above.
    return <>
        <form action="" className="form" onSubmit={handleSubmit}>  
            <div>
            <input type="text" ref={refContainer}/>                 {/* Assigning useRef to an element.We need to use 'ref' attribute. Now,the refContainer will store the value of the input field. But to access this value, we have to use an event handler */}
            <button type="submit" >Submit</button>
            </div>
            <div className="" ref={divContainer}>Hello</div>        {/* Assigned divContainer to this div element. But to access this value, we have to use an event handler */}
        </form>
    </>
}

export default UseRefBasics;
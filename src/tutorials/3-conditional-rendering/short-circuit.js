import {useState,useEffect} from "react";

const ShortCircuit=()=>{

    const [text,setText]=useState('P');
    const [isError,setIsError]=useState(false);

    /* 
       1. Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

       2. The AND operator preserves non-Boolean values and returns them as they are. But in case of explicit type conversion, the converted value is returned. Example 'thirdValue' @ line 23.

       3. If the first part of an expression is false, the AND operator stops and returns the value of that falsy operand; it does not evaluate any remaining operands. This is called Short-circuit evaluation.

       4. For further details checkout https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

    */

    const firstValue = text||"Steve"; //If the 'text' is falsy, it will return the second value. Otherwise it will return the value of text

    const secondValue = text && "Steve"; //If the 'text' is truthy, it will return the second value. Otherwise, it will return the value of text

    const thirdValue=  !text && "Inverted" ; //If the 'text' is falsy (becomes truthy due to the NOT operator), it will return the second value. Otherwise, it will return false(as we are explicitly converting 'text' to boolean using NOT operator).

    // console.log(thirdValue);
    return <>
    <h2>{secondValue}</h2>
    {isError && <h1>Error...</h1>} 
    <button className="btn" onClick={()=>setIsError(!isError)}>Toggle Error</button> {/* Sets the value of isError opposite to the current value */}

    {text && <h1>Wuhuuu</h1>} {/* If 'text' is falsy, it will return the value of 'text', otherwise the h1 will be returned */}


    {isError? ( //For multiple returns, we can set ternary operator using parenthesis
        <p>There is an Error</p>
    ):
    (
        <div >
            <h2>There is no error</h2>
        </div>
    )}
    </>
}
export default ShortCircuit;

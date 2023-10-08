import {useState,useEffect} from "react";

const UseEffectCleanup=()=>{
    const [size,setSize]= useState(window.innerWidth);

    const checkSize= ()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
      window.addEventListener('resize', checkSize)

      return ()=>{ //The callback function in useEffect can return another function which is used to revert the changes done by useEffect. It is called cleanup function.

        window.removeEventListener('resize', checkSize) //After the initial render, this function will be called every time before executing the useEffect function.
        
      } 
    }) // We could have used an empty array ([]) as the second argument to the useEffect hook to solve this issue, but this approach will not work while dealing with conditional rendering. 
    return <>
    <h2>{size}PX</h2>
    </>
}

export default UseEffectCleanup;
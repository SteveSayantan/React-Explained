import React,{useState,useEffect} from "react";

const ShowHide=()=>{
    const[isVisible,setIsVisible]=useState(false);

    return <>
    <button className="btn" onClick={()=>setIsVisible(!isVisible)}>Show/Hide</button>
    {isVisible&&<Item/>}
    </>
}

const Item=()=>{
    const[size,setSize]=useState(window.innerWidth);
    
    const checkSize=()=>setSize(window.innerWidth);
    /* 
        1. Generally, the useEffect runs after each render. To avoid that we use empty dependency list. When the component is not mounted (like in this case), useEffect is never invoked.

        2. Here, we are also toggling the visibility of the component. Initially, this useEffect will run after toggling the visibility and add an EventListener. After that, each time we mount (show) the component, this useEffect will be executed and add an EventListener to the window each time.

        3. To avoid this we must use cleanUp function which generally runs every time before executing the useEffect due to re-render (after the initial render) and also when the component is unmounted.

        4. As we are also using the empty dependency list [] (which stops the useEffect from getting executed after the initial render), the useEffect hook will not run while resizing the window even if the component is visible. When the component is invisible i.e. not rendered, the hook is not triggered.

        5. If we wish to remove the [], in that case the useEffect will run after each render (due to resize and display toggling), and the cleanUp function will run every time before calling useEffect (after the initial render). (As usual)

        6. In that case too, there will be only one EventListener added to the window. :)
    
    */
    useEffect(()=>{ 
        window.addEventListener('resize', checkSize);
        console.log("Activated");

        return ()=>{
            console.log("DeActivated");
            window.removeEventListener('resize', checkSize)}; 
    }
    ,[])  


    return <>
    <div style={{marginTop:'2rem'}}>
        <h1>Window</h1>
        <h2>Size:{size} px</h2>
    </div>
    </>
}

export default ShowHide;
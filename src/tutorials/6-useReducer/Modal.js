import React from "react";
import { useEffect } from "react";

const Modal=({modalContent,closeModal})=>{
    useEffect(()=>{     // With each render of this component, this useEffect will be triggered. As a result, the closeModal function will be called. 
        let id=setTimeout(closeModal, 3000);
        return ()=>clearTimeout(id);
    })
    return <div className="modal">
        <p>{modalContent}</p>
    </div>
}

export default Modal;


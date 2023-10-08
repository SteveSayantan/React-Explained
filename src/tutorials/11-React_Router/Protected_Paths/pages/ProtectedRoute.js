import { Navigate } from "react-router-dom";        // This is Navigate Component.

const ProtectedRoute=({children,user})=>{
    if(!user){
        return <Navigate to='/'/>       // If we try to access dashboard without filling the form, we shall be redirected to Home page.
    }
    return children
}

/* 
    Difference between Navigate and useNavigate: 

    First one is a component and the other one is a hook. We use Navigate when we want to setup navigation in JSX and useNavigate when you want to navigate in the code (for example when the form is submitted).

    Here, we could have gone with useNavigate hook also.

*/
export default ProtectedRoute;
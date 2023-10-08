import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import Error from "./pages/Error";
import SharedComponent from "./components/sharedComponent";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";




function NestedPages(){ 
    const [user,setUser]=useState('')

    /* 
        1. The idea is to set the user with the value entered in login page 

        2. If the entered value is valid, redirect user to dashboard page.

        3. Else redirect to home page.

    
    */
    return <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<SharedComponent/>}>

        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>         
        <Route path="login" element={<Login setUser={setUser}/>}/>         
        <Route path="dashboard" element={                   // Here, as we need to setup dashboard as a restricted route, we are wrapping it with ProtectedRoute component.
            <ProtectedRoute user={user}>
                <Dashboard user={user}/>
            </ProtectedRoute>
            
            }/>         
        <Route path="*" element={<Error/>}/>
        </Route>
    </Routes>
   
    </BrowserRouter>
}

export default NestedPages;
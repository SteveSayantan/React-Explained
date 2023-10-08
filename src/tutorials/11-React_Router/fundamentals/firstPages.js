/* 
    React does not have support for routing i.e. we need to use external library for the same. One of the most popular choices for routing is React Router package. We need to install it separately. 
   
*/

import { BrowserRouter,Routes,Route } from "react-router-dom";

/* 
    BrowserRouter connects to the actual router

    Routes works as the parent of all routes

    Route is used to set up a single page
*/

function FirstPages(){ // path is going to reflect what is in the url. In element, we shall set up whatever we want to see on that page
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="testing" element={<div>
            <h2>Testing</h2>
        </div>}/>
    </Routes>
    </BrowserRouter>
}

export default FirstPages;
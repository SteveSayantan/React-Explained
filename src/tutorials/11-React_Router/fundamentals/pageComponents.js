import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from "./pages/Error";


function FirstPages(){ // We can directly use components in element prop. 
    return <BrowserRouter>
    <nav>Our NavBar</nav>       {/* This is going to be added to all the Pages. It must be located outside Routes component */}
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>        {/* Go to About.js for additional setup */}
        <Route path="products" element={<Products/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>

    <footer>Our Footer</footer>  {/* This is going to be added to all the Pages. It must be located outside Routes component */}   
    </BrowserRouter>
}
// All pages that does not exist in our app, will be taken care of by the * path. But this must be located at the end.
export default FirstPages;
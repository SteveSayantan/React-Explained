import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Error from "./pages/Error";
import Stats from "./pages/stats";
import SharedComponent from "./components/sharedComponent";
import SingleProduct from "./pages/singleProduct";
import SingleReview from "./pages/singleReview";


function NestedPages(){ 
    return <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="products" element={<SharedComponent/>}>        {/* In the element prop of the wrapping route, we shall use sharedComponent that acts as the general structure */}
            
            <Route index element={<Products/>}/>                    {/* This is for the parent/index route i.e. localhost:3000/products in this case */}
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="stats" element={<Stats/>}/>                
            <Route path=":productId" element={<SingleProduct/>}/>   {/* Here, as the page is nested inside the product route, the url looks like localhost:3000/products/69 where 69 is the productId */}                

        </Route>

        <Route path="about/:reviewId" element={<SingleReview/>}/>   {/* To setup URL params, we need to setup parameter name prefixed with colon. In this case, the URL is localhost:3000/about/420 where 420 is the reviewId */}

        <Route path="*" element={<Error/>}/>
    </Routes>
   
    </BrowserRouter>
}

export default NestedPages;
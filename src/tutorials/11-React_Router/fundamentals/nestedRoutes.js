import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from "./pages/Error";


function NestedPages(){ 
    return <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="products" element={<Products/>}>           {/* Here, we have nested two routes i.e. dashboard and stats in products route. Go to Products.js for additional setup*/}

            <Route path="dashboard" element={<div>This is dashboard</div>}/>        {/* url: localhost:3000/products/dashboard */}
            <Route path="stats" element={<div>This is stats</div>}/>                {/* url: localhost:3000/products/stats */}

        </Route>

        <Route path="*" element={<Error/>}/>
    </Routes>
   
    </BrowserRouter>
}

export default NestedPages;
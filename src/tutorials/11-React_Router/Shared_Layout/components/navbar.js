import { Link } from "react-router-dom"
function Navbar(){
    return <nav className="navbar">                         {/* / must be present before any path provided to Link component */}
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>

       <Link to='/products'>Products</Link>
       <Link to='/products/dashboard'>Dashboard</Link>       {/* As we have nested dashboard route inside products, the url is /products/dashboard */}
       <Link to='/products/stats'>Stats</Link>               {/* As we have nested dashboard route inside products, the url is /products/stats */}
    </nav>
}
export default Navbar;
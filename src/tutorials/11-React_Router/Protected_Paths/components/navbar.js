import { Link } from "react-router-dom"
function Navbar(){
    return <nav className="navbar">                         
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>

       <Link to='/products'>Products</Link>           
       <Link to='/login'>Log In</Link>           
    </nav>
}
export default Navbar;
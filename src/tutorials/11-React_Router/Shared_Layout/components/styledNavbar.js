/* 
    For creating a Navbar with active class and all that, React has a special component known as NavLink.

    The setup is quite similar to Link component with some extra features.


    1. If we use NavLink, React automatically adds an 'active' class to classList of the active link.

    2. Therefore, in the css, if we have an active class, then we can use it to style that active link.

    3. Most importantly, we can use a callback function as explained below.

*/

import { NavLink } from "react-router-dom"
function StyledNavbar(){
    return <nav className="navbar">  

       <NavLink to='/' style={      // This is basically the inline css approach

        ({isActive})=>{             // In this function, we can access isActive property by destructuring and use it.  
            return {color:isActive?'red':'grey'}
        }
       }>Home</NavLink>


       <NavLink to='/about' className={ // This is class approach. (In this setup, This approach is an overkill as React adds the active class to the classlist of the link if the link is active)
        ({isActive})=>{     
            return isActive?'link active':'link'
       }}>About</NavLink>
       
       <NavLink to='/products'>Products</NavLink>
       <NavLink to='/products/dashboard'>Dashboard</NavLink>       
       <NavLink to='/products/stats'>Stats</NavLink>               
    </nav>
}
export default StyledNavbar;
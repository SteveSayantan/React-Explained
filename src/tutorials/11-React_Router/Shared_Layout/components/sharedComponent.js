import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";    // We can use any of these two Navbars
import StyledNavbar from "./styledNavbar";

const SharedComponent = () => {
    return (
      <>

        {/* <Navbar/> */}           
        <StyledNavbar/>
        <Outlet/>

      </>
    );
  };
  /* 
    This is basically the general structure for the product page and its nested pages. But it has no effect on the other pages of our app

    We shall have the Navbar component at the top. 

    After that, we will be having the content of that particular page. Here, the Outlet represents the content of a page (parent or nested)
  
  */
  export default SharedComponent;
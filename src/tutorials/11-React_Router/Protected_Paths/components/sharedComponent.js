import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";  


const SharedComponent = () => {
    return (
      <>

        <Navbar/>           
        <Outlet/>

      </>
    );
  };

  export default SharedComponent;
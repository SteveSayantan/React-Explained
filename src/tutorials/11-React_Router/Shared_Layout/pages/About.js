import Navbar from "../components/navbar";   // We can use any of these two Navbars
import StyledNavbar from "../components/styledNavbar";

const About = () => {
    return (
        <>
        {/* <Navbar/> */}
        <StyledNavbar/>
      <section className='section'>
        <h2>About</h2>
      </section>
        </>
    );
  };
// As we have no nested route under about page, we need not use Outlet component

  export default About;
import Navbar from "../components/navbar";       // We can use any of these two Navbars
import StyledNavbar from "../components/styledNavbar";
const Home = () => {
    return (
        <>
      {/* <Navbar/> */}
      <StyledNavbar/>
      <section className='section'>
        <h2>Home Page</h2>
      </section>
        </>
    );
  };

  // As we have no nested route under home page, we need not use Outlet component
  export default Home;
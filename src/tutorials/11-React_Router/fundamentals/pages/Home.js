import { Link } from "react-router-dom";

/* 
  If we want to navigate inside our project, we have to use Link component from React Router.

  However, for external links e.g. facebook.com, we shall use traditional anchor tag.

*/

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className="btn">About</Link> {/* Here we want to navigate to About, therefore /about is used in the 'to' prop. **This should match exactly to the path mentioned in PageComponent.js and '/' must be present at the front of any path provided in Link component** */}
    </section>
  );
};
export default Home;

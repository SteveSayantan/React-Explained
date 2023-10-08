import { Link } from "react-router-dom";

/* 
  If we want to navigate inside our project, we have to use Link component from React Router.

  However, for external links e.g. facebook.com, we shall use traditional anchor tag.

*/

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className="btn">Back to Home</Link> {/* Here we want to navigate back to Home, therefore / is used in the 'to' prop. **This path should match exactly to the path mentioned in PageComponent.js** */}
    </section>
  );
};
export default About;

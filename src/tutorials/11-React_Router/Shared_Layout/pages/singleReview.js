import {NavLink,useParams} from 'react-router-dom'

const SingleReview = () => {
  // console.log(useParams())          // {reviewId: '564'}    The key is the name of the url param used in sharedLayout_Navbar.  

  const {reviewId}=useParams()        // As we have used reviewId as the url param in sharedLayout_Navbar.js

    return (
      <section className='section product'>
        <h2>single review</h2>
        <p>{reviewId}</p>
        <NavLink to='/' className='btn'>Back to Home</NavLink>
      </section>
    );
  };
  
  export default SingleReview;
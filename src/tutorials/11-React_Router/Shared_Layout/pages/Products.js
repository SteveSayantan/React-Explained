import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
    return (

        <section className='section'>
          <h2>Products</h2>
          <div className="products">
            {products.map((product)=>{          // Here, we are dynamically setting the content of the Products page.
              return <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>More Info</Link>
              </article>
            })}
          </div>
        </section>
    );
  };
  /* 
    1. In this setup, we are using index pages. It basically allows us to provide some specific content to the parent page, which was not possible in previous setup.

    2. Here, we need to create a general structure of the parent and nested pages. Go to sharedComponent.js for more info

    3. For details about index page setup, go to sharedLayout_Navbar.js
  
  */
  export default Products;
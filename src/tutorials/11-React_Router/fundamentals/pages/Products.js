import { Outlet } from "react-router-dom";
/* 
  This Outlet component displays the pages nested to current page according to url. Without this, we can not see the content of the nested pages

  E.g., if the url is localhost:3000/products/dashboard, it will show the content of dashboard page 

  E.g., if the url is localhost:3000/products/stats, it will show the content of stats page 

  However, the content outside Outlet component will be shared all across the nested pages.


  But,with this setup, if we want to add something specific to the products page (parent), that will be available to the nested pages too. So, we need to use index pages that is discussed in the next folder. 
*/



const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>       
        <Outlet/>
      </section>
    </>
  );
};

export default Products;

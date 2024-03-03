import {Link, useParams,useSearchParams} from 'react-router-dom' // useSearchParams() hook is used to get the query parameters present in the URL
import products from "../data";

// Different usecases of useSearchParams() hook: https://ultimatecourses.com/blog/query-strings-search-params-react-router

const SingleProduct = () => {
  const {productId}=useParams()
  // console.log(productId);

  const [query,setQuery]=useSearchParams();     // it returns an array containing an URLSearchParam object and a function   

  const queryObj= Object.fromEntries([...query])  // {featured:'true'}  for url: http://localhost:3000/products/recZk?featured=true (Gives empty object when no query is present)
  

  const product= products.find((product)=>product.id===productId)

  const {image,name}=product;
    return (
      <section className='section product'>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <Link to='/products' className='btn'>back to products</Link>
      </section>
    );
  };
  
export default SingleProduct;
import React from "react";
import { useFetch } from "../8-custom-hook/fetchData";
import Product from "./product";
const url= 'https://course-api.com/react-prop-types-example';



/* 
    It is possible that some parts of the data received from server might not contain all the expected properties.
    
    In this example, the last element of the array we get from this url does not have all the properties. So, to avoid getting error, we must follow the steps shown in product.js

*/

const ProductList=()=>{
    const{products}= useFetch(url);
    return <section>
        <h2>Products</h2>
        <ul className="products">
        {products.map((item)=><Product key={item.id} {...item}/>)}

        </ul>
    </section>
}

export default ProductList;
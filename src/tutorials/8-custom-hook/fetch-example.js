import React from "react";
import { useState } from "react";
import { useFetch } from "./fetchData";

/* 
    1. customHooks allow us to reuse a functionality

    2. In the following example, we will create a hook that fetches data and it can be used with other components too, unlike the traditional setup which only works for that component.

*/
const url= 'https://course-api.com/javascript-store-products'

const Example=()=>{
    const {loading,products}=useFetch(url)  // Using the custom hook to perform fetch. It would be called on each re-render but it would **only** fetch data on initial render of the component and if url is changed (due to the dependency array inside it) .

    // console.log(loading,products);

    return <div>
        <h2>{loading?'loading...':'data'}</h2>
    </div>
}

export default Example





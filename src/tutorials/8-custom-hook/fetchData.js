import { useEffect,useState } from "react"


export const useFetch=(url)=>{ // As this is a custom hook, its name must start with 'use'

    const [loading,setLoading]=useState(true);     // We can use other hooks in a custom hook
    const [products,setProducts]= useState([]);

    const getProducts= async ()=>{
        const response= await fetch(url);
        const products= await response.json();
        setProducts(products);
        setLoading(false);
    }

    useEffect(()=>{              // getProducts will only be triggered on initial render and when url is changed. It will not be executed even if its parent component re-renders.
        getProducts()
    },[url])                    // As we are using 'url' as a parameter, we must include it in dependency array. If it were a global variable, in that case, no need to include 'url' in dependency array


    return {products,loading}   // Returning an object containing two state values
}

/*  Working Principle in details:

    1. Initially, when this hook is called, due to async, the fetch function is executed in the background.

    2. At that instance, an empty array and true is returned.

    3. When both the promises are resolved, setProducts and setLoading are executed and as a result re-render occurs.

    4. Therefore, fetched data and false is returned this time.

*/
import React from "react";
import PropTypes from 'prop-types';  // This package is installed by default 

import defaultImage from '../../assets/default-sofa-image.jpeg' // This is how we import image located anywhere inside src folder. Actually, 'defaultImage' is not a component, it is just a path (string) 
// console.log(defaultImage);

/* 
    Basically we need to provide some default values to avoid getting error
*/


const Product=({image,name,price})=>{
    return <li className="product">
        <img src={image.url} alt={name} />  {/* If the incoming image prop is undefined, it will look for the same in defaultProps */}
        <h4>{name}</h4>
        <p>${price||3.99}</p>              {/* We can also do it like this */}
    </li>
}

// 1. First, we need to set a property 'propTypes' to the component.It is a property of any component, don't confuse it with the 'PropTypes' import.

Product.propTypes={
    image: PropTypes.object.isRequired, // Now we are using the imported 'PropTypes'. 
    name:PropTypes.string.isRequired,   // 'name' is a string, 'price' is a number, 'image' is an object (Based on what we get from the url). We have to assign that accordingly
    price:PropTypes.number.isRequired   // isRequired throws a warning if the corresponding property is missing
}

// 2. After setting propTypes property to the component, if any prop is missing, we will get a warning in the console. Now we can set some default values for our props.

Product.defaultProps={
    name:'Default Name',
    price:3.99,
    image: {                // Setting it as an object with 'url' property as basically the 'image' property is an object with a 'url' property.

        url:defaultImage    // defaultImage is a path i.e. a string
    }
}
export default Product;
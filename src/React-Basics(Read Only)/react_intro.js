import React from "react";
import ReactDOM from 'react-dom/client'; //ReactDOM helps to inject the JS into the root component in the index.html file

function Greeting(){ //This is also known as stateless functional component. A component that is a plain old JS function, must start with uppercase letter. It should always return JSX. 
  return <h2>This is our first React Component</h2>; //this html like thing is known as JSX
}

/**   Why are we using JSX instead of writing JS methods to create elements?
 * 
 *    const Greeting=()=>{
 *      return React.createElement('h2',{},'This is our first React Component');    // It takes the type of element to be created, the attributes of that element (as an object), the children of that element
 *    }
 * 
 *    For nested components it is going to be more messy, so it is beneficial to use JSX instead
*/

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Greeting/>);//We must use the self-closing tag with component in React
// root.render(<Greeting></Greeting>); //We can also write like this

/* 
  React is a Declarative, Component-Based, JavaScript library for building user interfaces

  DOM --> Everything we see on a html page is structured and rendered in DOM and it is a gap bridging mechanism from html to js world. Through JS we can manipulate DOM i.e. 
    make some changes and reflecting those in html

  Declarative
  -----------
  Declarative programming is when the programmer only states his/her requirement but not how to fulfil it. It is totally on the program to serve the request.
    Ex. We create components using JSX as per our requirement, but the DOM manipulation takes place with the help of React. We don't do it ourselves. 

  Imperative
  ----------
  Imperative programming is when the programmer has to describe explicitly, each and every step/instruction to be taken to get to the goal state.
    Ex. Manipulating DOM with the help of vanilla JS (From creating an element to appending that to another element, everything has to be stated explicitly)

  Why is React a UI library but not a framework?

  A framework does multiple things and a library focuses only on one thing and gets it done very well.
  
  React was built to solve the problem of user-interface development and it does that.
  
  Had it been a framework, it would contain means for Routing, Testing, Data Fetching, Build,State Management etc. built in it.
    However, we use external libraries like
        
      react-router for Routing

      jest for Testing

      Axios/ Fetch for Data Fetching

      WebPack/Parcel for Build

      Redux Toolkit for State Management

    i.e. anything we want to do in a React-based application, we have to bring from outside as per our project need.

    JSX(JavaScript Syntax Extension) - JSX is the combination of HTML and JS. In other words, is a syntax extension for JavaScript that lets us write HTML-like markup inside a JavaScript file.
    It is concise and readable in nature. However, our browser does not understand JSX out of the box. We need to transpile (by Babel)
    it into simple HTML and JS for our browser to understand. React and JSX are often used together, but we can use them independently of each other as they are two separate things.
    JSX is a syntax extension, while React is a JavaScript library.

    State - Each component may have some private data, it is called the 'state' of the component.

    Working of functional components in React: https://youtu.be/JxzzpDHYYXk?si=hIubvuebq0aC7GMx (Codedamn)

*/
import React from "react";
import ReactDOM from 'react-dom/client';


/*
 
JSX RULES:

1. Returns single element (A single parent element containing all the child elements)

2. We can also wrap the JSX inside a React.Fragment as shown in the example. These can also be written as <> and </> (Only the opening and closing angled brackets)

3. Use camelcase for html attributes (E.g. onclick should be written as onClick)

4. className instead of class 

5. All elements must be closed, even the ones not having a closing tag in html (e.g., img,input etc.)

 */
function Greeting(){
  return ( 
    <React.Fragment> 

    <section onClick={}>
      <h1 className="">Hello There</h1>
    </section>
    <section>
      <p>This is a paragraph</p>
    </section>
    <img src="" alt="" />
    <input type="text" />

    </React.Fragment>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Greeting/>);
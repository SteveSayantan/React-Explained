/* 
    Ref: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom

    DOM is an object-oriented representation of a web document as nodes and objects such that programming languages can interact with the document. The DOM is represented as a tree data structure.

    A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated.

    The document as a whole, the head, tables within the document, text within the table cells, and all other elements in a document are parts of the document object model for that document. 
      They can all be accessed and manipulated using the DOM

    The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. 
      For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.

    The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. 
      Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, e.g. Python

    DOM Manipulation
    ----------------

    It consists of three steps:

        1. DOM Query: Finding the particular element in the DOM
        
        2. DOM Update
        
        3. Re-Render

    Re-rendering the DOM is costly. Doing it frequently might slow our app down. In React, we don't perform DOM manipulation manually, rather React handles that itself due to its declarative nature.

    Virtual DOM (Ref: https://www.geeksforgeeks.org/reactjs-virtual-dom/)
    -----------

    React does not perform DOM manipulation directly. Rather, it creates a lightweight copy of the original DOM known as virtual DOM. Manipulating the VDOM is faster as as nothing gets 
     drawn on the screen. 

    With each change in state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. This comparison process
      is known as 'diffing'. After this, it finds the best possible ways to make these changes to the real DOM.

    React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component. 

    The re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI.
     This entire process of transforming changes to the real DOM is called Reconciliation.

    Batch Update (Ref: https://youtu.be/MlDTHzK1vKI?si=Ef-BCyIaC3KNqDYo)
    ------------
    In react 16 and 17, if we call multiple state setters inside a promise(or,an async function), our app re-renders for every state set i.e. the updates are not batched into a single update. This causes multiple re-renders for multiple state set which is not recommended.
    
    However, in case of a synchronous function, there will be only one re-render for multiple state set i.e. the updates are batched together.

    This behaviour is fixed in React 18, where all the updates are batched, regardless of when we call it.
*/
import ReactDOM from 'react-dom/client';

//CSS
import './style.css'; //This is how we connect external css 

//Nested Components Unplugged

function BookList() {
  return <section className="d-flex m-2">
    <Book/>
    </section>
}

const author= "Rabindranath Tagore";
const Book=()=> {
const title="Title of the Book"
return (
    <article >
      <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg" alt="" />

      <img src="./logo512.png" alt="" /> {/* This is how we use images located in public folder, but it is not recommended as they will not get optimized in production build. We should always place the assets in src folder.Any asset located in public folder can be accessed from domain e.g. localhost:3000/assetName */}

      {/*<p>This is how we comment in JSX </p>*/}
      
      {/* The JS expression used in JSX must return a value, e.g., {let x=6} does not return a value but {6+6} does. Similarly, we have to use ternary operator instead of if-else */}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4> {/** As this is a string , we can also use string methods */}      

    </article>
)}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
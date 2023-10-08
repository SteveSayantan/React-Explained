import ReactDOM from 'react-dom/client';

//CSS
import './style.css'; //This is how we connect external css (We need to connect the css to the final JS file, e.g., index.js )

//Nested Components Unplugged

function BookList() {
  return <section className="d-flex m-2">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book=()=> <article >
  <Image/>
  <Title/>
  <Author/>
  </article>

const Image= ()=>{
  return <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg" alt="" />
}
const Title=()=> <h1>Title of the Book</h1>

const Author=()=> <h4 style={{color:'#617d98',fontSize:'0.75rem' }}>Author Name</h4>; //This is how we write inline-css in JSX. Inside the style tag, the first pair of curley braces take us to the JS world and inside the JS world we need to set our styles inside an object. Also, we need to use camelCase instead of '-' for the names of CSS properties.



const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
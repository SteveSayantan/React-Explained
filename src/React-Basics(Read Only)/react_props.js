import ReactDOM from 'react-dom/client';

//CSS
import './style.css'; //This is how we connect external css 

//SetUp vars
const firstBook={
  author: "Rabindranath Tagore",
  title: "Title of the First Book",
  img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg"

}
const secondBook={
  author: "Abanindranath Tagore",
  title: "Title of the Second Book",
  img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg"

}

/* 
  Components interact with each other using props. Using Props to make components more dynamic. These are read-only properties. 

  We can directly pass string datatype as prop, but for other datatypes we need to use JS expression i.e. inside { }

  State is private to a component, however props are passed as args to child component to exchange data. Change in prop causes the child to re-render.

 */
function BookList() {
  return <section className="d-flex m-2">
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}  job='developer'>

      <p>This is a paragraph which resembles a props-children</p> {/* This is a props-children i.e. basically some content placed between the opening and closing tag. We need to use separate closing tag for the component having props-children */}

    </Book>


    <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} number={22} favorite/>   {/* this is the same as passing favorite={true} */}
    </section>
}



const Book=(props)=> {
  // console.log(props); //props is an object which contains values passed while rendering the component 

  // console.log(props.favorite)    // For the first component, it will return undefined, but for the second one it will return true.
return (
    <article>
      <img src={props.img} alt="" /> {/*Using the values passed while rendering the component */}
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}      {/* The paragraph will be rendered here.We must use "children" as the name of the property to access it */}
      <p>{props.job}</p>    {/* As we did not pass any property by the name of job to the second book component, it will not be displayed for the same */}      
      <p>{props.number}</p> {/* As we did not pass any property by the name of number to the first book component, it will not be displayed for the same */}      


    </article>
)}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
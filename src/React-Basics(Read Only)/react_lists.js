// No need to import 'React' as we are not using any method from that package in this file
import ReactDOM from 'react-dom/client';

//CSS
import './style.css'; //This is how we connect external css 

//SetUp vars
const books=[
  {
    id:1,
    author: "Rabindranath Tagore",
    title: "Title of the First Book",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg"
  
  },

  {
    id:2,
    author: "Abanindranath Tagore",
    title: "Title of the Second Book",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg"
  
  }
]

//React can directly render arrays if they contain string values, numbers or components. It can not directly render an array which contains objects

// Boolean, undefined and null within a JSX element can not be rendered unless they are type-casted to String. However, the element that holds such values will be added to the DOM. 

//An array of component is called a list and each component is known as a list child.

function BookList() {
  return <section className="d-flex m-2">

    {books.map((book)=><Book key={book.id} {...book}/>)}      {/*This map method returns a new array (list) which has the Book components and the properties of book is spreaded using spread syntax.*/}
    
    {/*For each list child there must be a "key" property(it is not a prop, so it can not be accessed via props object) which helps react to keep track of the list. It should contain an unique value which is the id in this case */}
    </section>
}



const Book=(props)=> {
  console.log(props);
  const {img,title,author}=props;
return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
)}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
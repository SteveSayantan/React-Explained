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

//React can directly render arrays if they contain string values only. It can not directly render an array which contains objects

//An array of component is called a list and each component is known as a list child.

function BookList() {
  return <section className="d-flex m-2">

    {books.map((book)=><Book key={book.id} {...book}/>)}      {/*This map method returns a new array (list) which has the Book components and the properties of book is spreaded using spread syntax.*/}
    
    {/*For each list child there must be a "key" property(it is not a prop, so it can not be accessed via props object) which helps react to keep track of the list. It should contain an unique value which is the id in this case */}
    </section>
}



const Book=({img,title,author})=> { //Destructuring the properties from the argument

  //All these eventHandlers have access to the event object

  const displayTitle=(e)=>{
    console.log(e);
    console.log(title);
  }

  const complexEvent=(author)=>{
    console.log(author);
  }
return (
    <article>

      <img src={img} alt="" />
      <h1 onClick={displayTitle}>{title}</h1> {/* Using reference function. As no argument is passed and only the name of the function is provided, it will execute when the event occurs */}
      <h4>{author}</h4>
      <button type='button' onClick={function(){console.log("Hello World")}} >Event</button>  {/* Using Inline Function */}
      <button type='button' onClick={()=>complexEvent(author)} >Complex Event</button>    {/* If we would only pass the function with argument, it will be executed immediately. To avoid this, we use this arrow function syntax. When the event occurs it returns the function */}

    </article>
)}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
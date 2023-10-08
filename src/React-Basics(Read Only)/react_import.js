import ReactDOM from 'react-dom/client';

//CSS
import './style.css'; //This is how we connect external css 

//Importing a Component
import StoryBook from './BookComponent';  //As it is a default export from the file, we can name it whatever we want and no need to add the curley braces

//Importing Data
import {books} from './data';  //As the data.js imports 'books', to access it we have to name it 'books' only, otherwise it will throw error

function BookList() {
  return <section className="d-flex m-2">

    {books.map((book)=><StoryBook key={book.id} {...book}/>)}   {/* Using the component imported from another file */}   
    
    </section>
}


const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<BookList/>);
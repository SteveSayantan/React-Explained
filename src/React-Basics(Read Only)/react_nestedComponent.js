import ReactDOM from 'react-dom/client';

//Nested Components

function Greeting() {
  return <div>
    <Person/>
    <Message/>
  </div>
}

const Person=()=><h2>This is Steve</h2> //This is going to be rendered at <Person/>
const Message=()=>{
  return <p>This is a message from Steve</p> //This is going to be rendered at <Message/>
}

const root=ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Greeting/>);
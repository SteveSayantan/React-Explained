// No need to import 'React' as we are not using any method from that package in this file

const Book=({img,title,author})=> { //Destructuring the properties from the argument

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
        <h1 onClick={displayTitle}>{title}</h1> 
        <h4>{author}</h4>
        <button type='button' onClick={function(){console.log("Hello World")}} >Event</button>  
        <button type='button' onClick={()=>complexEvent(author)} >Complex Event</button>    
      </article>
  )}

export default Book;  //We can have multiple exports but only one default export per file and both the names should match
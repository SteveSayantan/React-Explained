import React,{useState} from 'react'

const ControlledInput=()=>{
    const [client,setClient]=useState({firstName:'',email:'',age:''});
    const [people,setPeople]=useState([]);

    const handleChange=(e)=>{
        e.preventDefault(); 
        const name= e.target.name;
        const value= e.target.value;
        setClient({...client,[name]:value}); //In this case, we are dynamically setting the properties of client object

    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(client.firstName&&client.age&&client.email){
           const newPerson= {...client,id:new Date().getTime().toString()}
           setPeople([...people,newPerson]);
           setClient({firstName:'',email:'',age:''});
       }  
    }
    return <>
        <article>
           <form className='form' onSubmit={handleSubmit}>  {/*We could have also set the eventHandler function to the button and listen to the Click event */}
             <div className="form-control">
                 <label htmlFor="firstName">Name</label> {/* In JSX 'for' attribute is written as 'htmlFor' */}
                 <input 
                 type="text" name="firstName" id="firstName"

                 value={client.firstName} 

                 onChange={handleChange}

                />        {/* In JSX, as we have added this value attribute as firstName, we have connected that state value to our form and we can not write anything in the form until we add the onChange handler which will fire each time we type something in the form*/}
                </div> 



             <div className="form-control">
                 <label htmlFor="email">Email</label> 
                 <input 
                 type='email' name="email" id="email"

                 value={client.email} 

                 onChange={handleChange}
                 
                 
                 />
                </div> 

             <div className="form-control">
                 <label htmlFor="age">Age</label> 
                 <input 
                 type='number' name="age" id="age"

                 value={client.age} 

                 onChange={handleChange}
                 
                 
                 />
                </div> 
                <button type='submit'>Add Person</button> 
            </form> 

            {
                people.map((person)=>{
                    return <div key={person.id} className='item'>
                        <h4>{person.firstName}</h4>
                        <p>{person.email}</p>
                        <p>{person.age}</p>
                    </div>
                })
            }
        </article>


    </>
}

export default ControlledInput;
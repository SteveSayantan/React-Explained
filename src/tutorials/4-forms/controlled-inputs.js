import React,{useState} from 'react'

const ControlledInput=()=>{
    const [firstName,setFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [people,setPeople]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        if(firstName&&email){
            const person={id:new Date().getTime().toString(),firstName,email};
            
            setPeople((people)=>[...people,person]); //First destructuring all the values of people, then adding the new ones. Using the function approach
            
            setFirstName('');
            setEmail('');
        }
        else{
            console.log('Empty Values');
        }

    }
    return <>
        <article>
           <form className='form' onSubmit={handleSubmit}>  {/*We could have also set the eventHandler function to the button and listen to the Click event */}
             <div className="form-control">
                 <label htmlFor="firstName">Name</label> {/* In JSX 'for' attribute is written as 'htmlFor' */}
                 <input 
                 type="text" name="firstName" id="firstName"

                 value={firstName} 

                 onChange={(e)=>setFirstName(e.target.value)}

                  />        {/* In JSX, as we have added this value prop as firstName, we have connected that state value to our form and we can not write anything in the form until we add the onChange handler which will fire each time we type something in the form*/}
                </div> 



             <div className="form-control">
                 <label htmlFor="email">Email</label> 
                 <input 
                 type='email' name="email" id="email"

                 value={email} 

                 onChange={(e)=>setEmail(e.target.value)}
                 
                 
                 />
                </div> 
                <button type='submit'>Add Person</button> 
            </form> 

            {
                people.map((person)=>{
                    return <div key={person.id} className='item'>
                        <h4>{person.firstName}</h4>
                        <p>{person.email}</p>
                    </div>
                })
            }
        </article>


    </>
}

export default ControlledInput;
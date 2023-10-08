import React from "react";
import {data} from "../../data";

const UseStateArray=()=>{
    const [people,setPeople]= React.useState(data); //Another way to import and use UseState

    const removeItem= (id)=>{
    //    setPeople(people.filter((ele)=>ele.id!=id)) ;         //Approach without callback function

       setPeople((prevPeople)=>{        //With callback function that takes the previous State value as an arg,and returns the updated value. If nothing is returned, it will result in errors.
          return prevPeople.filter((ele)=>ele.id!=id)
        }) ; 
    }
    return <>
    {  
    // This returns an array containing divs with h4
        people.map((person)=>{
        const{id,name}=person;
        return(
            <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={()=>removeItem(id)}>Remove</button>
            </div>
        )
        })
        
    }
    <button className="btn" onClick={()=>setPeople([])}>Clear Items</button>  {/* When this button will be clicked, setPeople function will change the state value to an empty array */}
    </> 


}
export default UseStateArray;

import {useState,useEffect} from "react";

const url='https://api.github.com/users';


const UseEffectSecondArg=()=>{
    const[users,setUsers]=useState([]);

    
    useEffect(()=>{ //This cb inside useEffect can never be transformed to an asynchronous one i.e. it can not return a promise

        const fetchData=async ()=>{    // declaring and calling the function inside useEffect, and making the useEffect independent of this function (as per docs)
            const data= await fetch(url);
            const people= await data.json();
            setUsers(people);
        }
        fetchData();
    },[]) //We are calling useEffect only for the initial render using empty array, otherwise it will cause an infinite loop.
    
    return <>
    <h2>Fetch Users</h2>
    <ul className="users">{users.map((user)=>{
        const{id,login,avatar_url,html_url}=user;
    return(

    <li key={id}>
        <img src={avatar_url} alt="" />
        <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
        </div>
    </li>
    )
    })}
    </ul>
    </>
}

export default UseEffectSecondArg;
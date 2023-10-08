import {useState,useEffect} from "react";

const url='https://api.github.com/users/QuincyLarson'


const MultipleReturns=()=>{
    //As it is basically a function, it is gonna have a single return. If a return statement is hit, the others are ignored.
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    const [user,setUser]=useState('Default User');
    const fetchData=()=>{
        fetch(url).then((data)=>{
            if(!data.ok){   //Check if the request was successful or not
                setIsLoading(false);
                setIsError(true);
                throw new Error(data.statusText);
            }
            return data.json();
        })
        .then((user)=>{
            setUser(user);
            setIsLoading(false); //set the value to false, after getting the data
        })
        .catch((err)=>console.log(err))
    }
/*
    const fetchData= async()=>{
        try{
            const resp= await fetch(url)
            if(!resp.ok){
                setIsError(true)
                setIsLoading(false)
                return;
            }
            const user= await resp.json()
            setUser(user)
        }
        catch(error){
            setIsError(true)
            console.log(error);
            setIsLoading(false)
        }
    }
*/
    useEffect(()=>{fetchData()},[])

    if(isLoading){
        return <>
        <h1>Loading...</h1>
        </>
    }
    if(isError){
        return <>
        <h1>Error...</h1>
        </>
    }
    const {avatar_url,name,company,bio}=user;
    return<>
    <div className="">
        <img style={{width:'100px',borderRadius:'25px'}}src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <h4>Works at{company}</h4>
        <p>{bio}</p>
    </div>
    </>
}
export default MultipleReturns;
import {useQuery} from '@tanstack/react-query'
import SingleItem from './SingleItem';
import customFetch from './utils';

/* 
  As React-Query is a state (specially, server state) management library, we can set up our queries in different components and we don't need to pass
  them down the component tree and we can also communicate between them. It makes fetching, caching, synchronizing and updating server state in our web applications a breeze.
  
  If we are dependent on a server for data, instead of making call from one component and drilling the props down the tree, React Query lets each component make their own
  network calls. It sits between the server and the whole component to manages those calls. It is similar to redux, but optimzed for making network requests.
*/
const Items = () => {
  // we shall use useQuery hook to make our fetch query

  const result= useQuery({ // It takes an obj with these two properties and the property names should match exactly. Read more from the .md file

    queryKey:['tasks'],                 // A query key which can be a string or an array of string for uniquely indentifying this query for caching
    queryFn: ()=> customFetch.get('/')  // A queryFn which is a function that **returns a promise**

  })

  // console.log(result);     // It is an object with bunch of properties

  const {isLoading,data,isError,error}=result;    

  if(isLoading) return <p style={{marginTop:'1rem'}}>Loading...</p>

  // if(isError) return <p style={{marginTop:'1rem'}}>There was an error...</p>      // We can display error using isError property like this

  if(error) return <p style={{marginTop:'1rem'}}>{error.response.data}</p>      // We can display error using the actual error property like this

  // As we are using axios, this 'error' property will contain the axios error. If we use fetch method, the contents of the 'error' property may change. 

  return (
    <div className='items'>
      {/* ReactQuery serves the entire response in the 'data' property. Axios also does the same, therefore we have to go two levels deep */}
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

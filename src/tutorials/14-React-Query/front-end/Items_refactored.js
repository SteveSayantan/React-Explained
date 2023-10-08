import { useFetchTasks } from './reactQueryCustomHooks';
import SingleItem from './before_refactoring/SingleItem';

/* 
  As React-Query is a state management library, we can set up our queries in different components and we don't need to pass
  them down the component tree and we can also communicate between them 
*/
const Items = () => {
  
  const {isLoading,data,isError,error}=useFetchTasks();

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

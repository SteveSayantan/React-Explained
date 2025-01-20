import { useMutation,useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import customFetch from './utils';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const queryClient= useQueryClient();    // useQueryClient helps us access a query's data located in other component

  // To create , update, delete we use useMutation hook from React Query

  const result= useMutation({ // We may skip adding a queryKey but we have to provide these properties with exact names.
    // mutationFn should be a function that either **returns a promise or throws an error.**

    mutationFn: (taskTitle)=> customFetch.post('/',{title:taskTitle}),   // we could have hard-coded 'title' as newItemName, but in that case, we won't be able to reuse this query in other components.

    // useMutation has some helper methods as follows and their names should match exactly:

    onSuccess: ()=>{
      // here, we want to re-fetch new tasks, to do that we need to mark the query data in Items.js as invalid (using the following method), so that React Query fetches it again.
      queryClient.invalidateQueries({queryKey:['tasks']})   // this queryKey property should exactly match that of the query we are trying to refer to. 
      toast.success('task added')
      setNewItemName('');
    },

    onError: (error)=>{// It gets triggerd when there is an error, and we can access the actual 'error' property

      // console.log(error);      //It is Axios error,as we are using axios
      toast.error(error.response.data.msg)
    }

  })

  // console.log(result);    // In result, we get a many useful properties   

  const{mutate,isLoading}= result;    // This 'mutate' property refers to our mutationFn, and we shall call this when form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;

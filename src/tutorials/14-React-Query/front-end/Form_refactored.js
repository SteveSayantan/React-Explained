import { useState } from 'react';
import { useCreateTask } from './reactQueryCustomHooks';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const{mutate,isLoading}= useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(newItemName,{// The mutate function, when invoked, takes an object as the second arg.

      onSuccess:()=>{setNewItemName('')}  //Inside it, we can define 'onSuccess' method. This will not collide with the 'onSuccess' we have in useCreateTask hook.
    });
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

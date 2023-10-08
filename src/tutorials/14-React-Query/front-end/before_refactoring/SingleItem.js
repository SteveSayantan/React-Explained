import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import customFetch from "../utils";

const SingleItem = ({ item }) => {
 
  const queryClient= useQueryClient();      

  const {mutate:editTask}= useMutation({      // destructuring the mutate property and giving it an alias
      mutationFn:({isDone,taskId})=> customFetch.patch(`/${taskId}`,{isDone}),
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['tasks']});
        toast.success('task edited successfully')
      }
  })

   
  const {mutate:deleteTask,isLoading}= useMutation({  // destructuring the mutate property and giving it an alias
      mutationFn:(taskId)=> customFetch.delete(`/${taskId}`),
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['tasks']});
        toast.success('task deleted successfully')
      }
    })
  
  
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={()=>editTask({isDone:!item.isDone,taskId:item.id}) }
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={isLoading}
        onClick={() =>deleteTask(item.id) }
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

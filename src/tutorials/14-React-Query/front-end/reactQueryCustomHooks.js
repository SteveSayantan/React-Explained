import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import customFetch from "./utils";

// For better accessibility , we have gathered all the mutation functions in one file.


export const useFetchTasks= ()=>{ // As useQuery is a hook, we must invoke it inside a hook (or a component)

    const result= useQuery({ 
        queryKey:['tasks'],                 
        queryFn: ()=> customFetch.get('/')  
    
    })  
    
    return result;
}

// We need to setup different queryClient instances for each custom hook (as we they are separated now)
export const useEditTask=()=>{
    
    const queryClient= useQueryClient();        

    const {mutate:editTask}= useMutation({      // destructuring the mutate property and giving it an alias
        mutationFn:({isDone,taskId})=> customFetch.patch(`/${taskId}`,{isDone}),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['tasks']});
          toast.success('task edited successfully')
        }
    })
    return editTask;
}

export const useDeleteTask=()=>{

    const queryClient= useQueryClient();

    const {mutate:deleteTask,isLoading}= useMutation({  // destructuring the mutate property and giving it an alias
        mutationFn:(taskId)=> customFetch.delete(`/${taskId}`),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['tasks']});
          toast.success('task deleted successfully')
        }
      })
      return {deleteTask,isLoading};
}

export const useCreateTask=()=>{

    const queryClient= useQueryClient();

    const result= useMutation({ 
        mutationFn: (taskTitle)=> customFetch.post('/',{title:taskTitle}),   
    
        onSuccess: ()=>{         
          queryClient.invalidateQueries({queryKey:['tasks']})   // this queryKey property should exactly match that of the query we are trying to refer to. 
          toast.success('task added')
        },
            
        onError: (error)=>{
          toast.error(error.response.data.msg)
        } 
      })
      return result;
}


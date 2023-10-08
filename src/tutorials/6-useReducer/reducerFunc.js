export const reducer=(state, action)=>{   // State refers to the previous state before update, action refers to the object sent by dispatch method 
    // console.log(state,action);

    // Now as per the dispatched object properties, we can change state values to perform different tasks. 
    if(action.type=='ADD_ITEM'){
        const newArray= [...state.people,action.info]
        return {...state,people:newArray,isModalOpen:true,modalContent:"Item Added"}    // The values returned from this reducer function are going to be new state values. So we must return some values from this function
    }
    else if(action.type=='NO_VALUE'){
        return {...state,isModalOpen:true,modalContent:'Enter Value'}
    }
    else if(action.type=='CLOSE_MODAL'){
        return {...state,isModalOpen:false}
    }
    else if(action.type=='REMOVE_ITEM'){
        const newArray= state.people.filter((person)=>person.id!=action.info)
        return {...state,people:newArray,isModalOpen:true,modalContent:'Item Removed'}  // In each case, we always keep track of the previous state properties by destructuring it at first
    }
    throw new Error('No Matching Action Type')  // If no match found, throw Error 
           
}
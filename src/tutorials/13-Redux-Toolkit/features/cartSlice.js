/* 
    Slice in the land of redux refers to a feature of our app

    We shall implement the cart functionality in this file.

    It is recommended to create a separate folder for these slice files.
*/

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const url= 'https://www.course-api.com/react-useReducer-cart-project'

const initialState={
    cartItems:[],
    amount:0,
    total:0,
    isLoading:true
}
/* 
    For performing asynchronous tasks, we use createAsyncThunk

    It takes two args, name (Any) and a callback function that must return a promise. It gives access to lifecycle actions (pending,fulfilled,rejected), discussed below.
*/


export const getCartItems= createAsyncThunk('cart/fetchData',(name,thunkAPI)=>{ // This cb must return a promise, we can use an async function as cb also.

    // console.log(name)   // This is actually the argument passed while calling getCartItems in CartContainer.js

    // console.log(thunkAPI)  //  This is an object with some really useful methods

    // thunkAPI.getState()     // Returns the store object with all the state values in it

    // thunkAPI.dispatch(openModal())     // Dispatches the given action, even if the action is not a part of this slice ( openModal needs to be imported !!!!)

    return fetch(url).then((resp)=>{
        return resp.json();             // Both of these 'return' are inevitable , otherwise the promise returned by then block (that goes to getCartItems.fulfilled) can not be fulfilled     
    })
    .catch(err=>{
        return thunkAPI.rejectWithValue('Something Went Wrong')     // the 'return' keyword is a must, because this fulfilling value of the promise returned by catch block has to go to getItems.rejected
    })
})


const cartSlice=createSlice({   //This function returns an object containing the reducer function that is capable of modifying the initial value.

    name:'cart',        // We can give any name to our slice. But the property should be named as 'name'
    initialState,       // We need to pass the initial value, property name should be 'initialState' only.

    reducers:{          // Every reducer function can access state and action ( it is an object containing information sent while calling that reducer )

        clearEntireCart:(state,action)=>{

            state.cartItems=[]                      // Here, we may consider just changing the particular state value and not return the new state value (like we used to do while using useReducer) , this redux toolkit comes with 'Immer' library which takes care of all that stuff.

            // return {...state,cartItems:[]}       // If we choose to return the state value, we must make sure that the other properties of the state remain intact. Else, the state will contain the returned value only.
        },

        removeItem:(state,action)=>{

            // console.log(action);

            const itemId= action.payload;
            state.cartItems=state.cartItems.filter(item=>item.id!=itemId);

        },

        increase:(state,action)=>{
            // console.log(action)
            const cartItem= state.cartItems.find((item)=>item.id==action.payload.id)  // We are sending id as an object while calling increase function in cartSlice.js, that's why we have to use action.payload.id       
            cartItem.amount=cartItem.amount+1;
        },

        decrease:(state,action)=>{
            const cartItem= state.cartItems.find((item)=>item.id==action.payload.id)
            cartItem.amount=cartItem.amount-1;
        },

        calculateTotals:(state,action)=>{
            let amount=0;
            let total=0;

            state.cartItems.forEach((item)=>{
                amount+=item.amount;
                total+=item.amount* item.price;
            })

            state.amount=amount;
            state.total=total.toFixed(2)
        }
        

    },
    extraReducers: // We need to create 'extraReducers' method for handling AsyncThunk (No other property name can be given)

        (builder)=>{    // This method takes builder object as an arg. For each case, we need to chain addCase like shown below.


            // addCase method takes two args: state of the promise and a callback

            builder.addCase(getCartItems.pending, (state,action)=>{    // This cb has access to state, action 
                state.isLoading=true
            })

            .addCase(getCartItems.fulfilled,(state,action)=>{   // When the promise returned by the callback of createAsyncThunk is resolved, we get the resolved data in action.payload
                // console.log(action);
                state.isLoading=false
                state.cartItems=action.payload;
            })

            .addCase(getCartItems.rejected, (state,action)=>{
                // console.log(action);                         // The argument passed while calling thunkAPI.rejectWithValue can be accessed through this
                state.isLoading=false           
            })
        }
    

})

console.log(cartSlice)

export const{clearEntireCart,removeItem,increase,decrease,calculateTotals}=cartSlice.actions;     //In the cartSlice.actions, we get the functions set inside reducer. We're exporting those right away.

export default cartSlice.reducer;       // This part will be imported by store.js for registration purpose


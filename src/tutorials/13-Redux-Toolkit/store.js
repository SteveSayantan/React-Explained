import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import modalReducer from './features/modalSlice'
/* 
    This basically works as a manager of all the functionalities / Slices. We need to register all our features in this, as shown below.

    Checkout the cartSource.js for Provider component.
*/  
export const store=configureStore({
    reducer:{
        cart:cartReducer,            // We can give any name to the key
        modal:modalReducer
    }
})

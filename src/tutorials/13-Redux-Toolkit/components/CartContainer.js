import CartItem from "./CartItem";
import { useSelector,useDispatch } from "react-redux";      // useDispatch hook is used to access the reducer functions
import { clearEntireCart,calculateTotals, getCartItems } from "../features/cartSlice";
import { openModal} from "../features/modalSlice";
import { useEffect } from "react";

const CartContainer=()=>{
    const dispatch=useDispatch();            // Invoking the useDispatch hook
    const {cartItems,total,amount,isLoading}=useSelector((store)=>store.cart)

    useEffect(()=>{
        dispatch(getCartItems('Random Argument'))       // How we access this argument, checkout getCartItems in cartSlice 
    },[])

    useEffect(()=>{
        dispatch(calculateTotals());
    },[cartItems]);

    if(isLoading){
        return <div className="loading">
            <h1>Loading...</h1>
        </div>
    }
    if(amount<1){
        return <section className="cart">
            <header>
                <h2>your bag</h2>
                <h4 className="empty-cart"> is currently empty</h4>
            </header>
        </section>
    }

    return <section className="cart">
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>total <span>${total}</span>
                </h4>
            </div>
            <button className="btn clear-btn" onClick={()=>{
                dispatch(openModal())         // We need to call openModal function wrapped in dispatch, like this
            }}>clear cart</button>         
        </footer>
    </section>
}

export default CartContainer;
import { ChevronDown,ChevronUp } from "../icons";
import { removeItem,increase,decrease } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const CartItem=({id,img,title,price,amount})=>{
    const dispatch= useDispatch()
    return <article className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button className="remove-btn" onClick={()=>dispatch(removeItem(id))    // Whatever we pass while calling the function, will be available in action.payload in cartSlice.js
            }>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={()=>dispatch(increase({id}))    // We can send this id as an object also. We shall get an object inside action.payload in cartSlice.js.
        }><ChevronUp/></button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={()=>{
                if(amount==1){
                    dispatch(removeItem(id));
                    return;
                }
                dispatch(decrease({id})) // We can send this id as an object also. We shall get an object inside action.payload in cartSlice.js.
            }    
        }><ChevronDown/></button>
        </div>
    </article>
}

export default CartItem;
import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'

const Navbar=()=>{
    const val = useSelector((storeVal)=>{    // To access the initial state, we need to use useSelector hook which takes a callback. This callback fn. takes the entire store (containing all the reducers) as a parameter. This callback must return the value we need to access.

        return storeVal.cart        // The cart property basically holds the initial state passed in cartSlice. It is being stored in val.
        // We're looking for 'cart' property as in the store.js, we named the cart-reducer as 'cart'.
    });
    // console.log(val.amount) 
    return <nav>
        <div className="nav-center">
            <h3>redux toolkit</h3>
            <div className="nav-container">
                <CartIcon/>                 {/* Go to icons.js for details about setup */}
                <div className="amount-container">
                    <p className="total-amount">{val.amount}</p>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;
import {Provider} from 'react-redux'
import {store} from './store'
import CartCollection from './cartCollection';



function CartSource() {
  
    return <Provider store={store}>       {/* We have to wrap our app with this Provider component, and pass the store value using 'store' prop (no other name can be used) */}
      <CartCollection/>
    </Provider>;
  }
export default CartSource;
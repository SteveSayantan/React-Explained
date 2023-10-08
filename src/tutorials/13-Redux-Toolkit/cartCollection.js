import Navbar from './components/navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function CartCollection(){
    const {isOpen}=useSelector((store)=>store.modal);
    return <main>
        {isOpen&&<Modal/>}
        <Navbar/>
        <CartContainer/>
    </main>
}

export default CartCollection;
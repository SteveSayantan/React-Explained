import { ToastContainer } from 'react-toastify';
import Form from './Form_refactored';
import Items from './Items_refactored';
import 'react-toastify/dist/ReactToastify.css';


const MainComponent = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items />
    </section>
  );
};
export default MainComponent;

// To run this app, first we need to spin up the server. Only then, we can work with this MainComponent.
// Refer to the docs for more usecases: https://react.dev/reference/react/useTransition

import { useState,useTransition } from 'react';
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending,startTransition]= useTransition()     // This is how we invoke useTransition. It gives two values like this

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTransition(()=>{   // startTransition takes a callback function inside which we put the slow functionality to be completed in the background, without blocking UI.

        const newItems = Array.from({ length: 5000 }, (_, index) => {
            return (
                <div key={index}>
            <img src='./logo192.png' alt='' />
            </div>
        );
        });
        setItems(newItems);
    })
};

/* 
    Now with this setup, the slower function occurs in the background and the input response is faster than the previous setup.

    isPending is a boolean value. When it is true, it signifies the function given to useTransition is being executed in the background, and false when execution is over.
*/
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

        {isPending? <h4>Loading...</h4>:(   // Displaying items conditionally wrt isPending
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>)}
    
    </section>
  );
};
export default LatestReact;
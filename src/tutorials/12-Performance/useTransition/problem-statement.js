import { useState } from 'react';
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    const newItems = Array.from({ length: 5000 }, (_, index) => {       // skipping the first arg (not literally, we can use that underscore to access that arg)
      return (
        <div key={index}>
          <img src='./logo192.png' alt='' />
        </div>
      );
    });
    setItems(newItems);
  };

/* 
    1. With useTransition hook we can treat some functionality as less urgent.

    2. Like in this example, with each change in input of the input field, we re-render this parent element twice. This parent element contains a bulky component that is very expensive to render.

    3. As a result, the re-render of the parent element takes time and this makes our app choppy and sluggish, i.e. inputs will not be rendered properly and so on.

    4. But we want a fast response in the input field, but the render of that bulky component can happen in background. For such cases, useTransition hook comes in handy.

    5. Before rendering this component, we should turn on CPU throttling from `performance >> capture settings` in chrome devtools. Remember to restore it once our work is completed. 


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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>
    </section>
  );
};
export default LatestReact;
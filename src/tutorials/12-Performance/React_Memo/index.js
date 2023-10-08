import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
/* 
    1. As we have already seen in the Lower-State dir, if we change the count state value, the whole component re-renders including the List and Person component.

    2. But,we can not always set up separate components. In such scenarios we use 'memo' function provided by React. Here, it will stop the List component from unnecessary re-renders.

    3. This basically returns a memoized component that only re-renders when its props have changed.

    4. The functionality is implemented in the List component.


*/
  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} />
    </section>
  );
};
export default LowerState;
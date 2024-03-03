import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
/* 
    Ref: https://youtu.be/DEPwA3mv_R8?si=ugfmCvg7d7u4DiYw

    1. As we have already seen in the Lower-State dir, if we change the count state value, the whole component re-renders including the List and Person component.

    2. But,we can not always set up separate components. In such scenarios we use 'memo' function provided by React. Here, it will stop the List component from unnecessary re-renders.

    3. This basically returns a memoized component that only re-renders when its props have changed. Make sure the props are primitive in nature, otherwise memoization won't work. Check out
      useMemo/index.js for details.

    4. The functionality is implemented in the List component.

    5. This function compares the previous props with the current ones. If the props change, re-render occurs. If the props passed to the component change a lot, we shouldn't use memo() for that component.

    6. We can use multiple instances of a memoized component in the same page and each of them will act as independent memoized component. 

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
import { useState } from 'react';
import { data } from '../../../data';
import { Counter } from './counter';
import List from './List';
/* 
    1. When the component's state or props change, React will re-render the component to reflect these changes.

    2. However,if the parent element re-renders, React will re-render its children elements too, even if state or props of those children components have not changed.

    3. This causes issue in big applications.

    4. In this example, when we change the count value, the parent element (LowerState) re-renders. As a result, the children elements (i.e. List and its children) also re-render. 


    5. One possible soultion is to move the button and the state values to a separate component (i.e. lower the state of that component)
    6. With this setup, only that component re-renders each time state value changes. Uncomment the Counter component and comment down the button to see it in action. 


    7. How to use Profiler react dev tool https://youtu.be/nOyN6_qSj3c

*/
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      {/* <Counter/> */}
      <List people={people} />
    </section>
  );
};
export default LowerState;

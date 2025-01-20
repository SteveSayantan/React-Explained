import { useCallback } from 'react';
import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
import slowFunc from './slowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  let val=slowFunc()
  console.log(val);

  const removePerson= useCallback(
    (id)=>{
    const newPeople= people.filter((person)=>person.id!=id)
    setPeople(newPeople);

  }, [people])

/*      
    1. The issue with current setup is, whenever the count state value changes, the component re-renders and the slowFunction is executed unnecessarily every time. slowFunc is an expensive function that has a huge impact.

    2. To stop this we use useMemo hook that allows us to memoize its returned value.

    3. Only if one of its dependencies changes, that slowFunc will be executed.

    4. As a result, the performance of our React app is improved.

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
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};
export default LowerState;
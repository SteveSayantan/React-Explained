import { useCallback,useMemo } from 'react';
import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
import slowFunc from './slowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value=useMemo(slowFunc,[])                // The given function must return a value
  // const value=useMemo(()=>slowFunc(),[])       // We can do like this also, but the return is must

  console.log(value);

  const removePerson= useCallback(
    (id)=>{
    const newPeople= people.filter((person)=>person.id!=id)
    setPeople(newPeople);

  }, [people])

/*      
    1. The useMemo hook takes two arguments: first one is a function that ** returns ** a value we want to memoize and an array of dependencies.

    2. If one of the values in the dependency array changes, the given function will be executed.

    3. For empty dependency array, the given function will run only on initial render.

    4. As a result, the persormance of our React app is improved.

*/

/* 
  Difference between useMemo and useCallback

    1. In case of useMemo, we are controlling the execution of an expensive function to improve performance.

    2. But, in case of useCallback, we are stopping the re-build of a function (that is passed as a prop to another component) that can cause re-rendering of other component in the tree. 

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
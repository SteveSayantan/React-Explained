import { useCallback,useMemo } from 'react';
import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
import slowFunc from './slowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const memoizedValue=useMemo(slowFunc,[])                // The given function must return a value which will be stored in "memoizedValue"
  // const memoizedValue=useMemo(()=>slowFunc(),[])       // We can do like this also, but the return is must

  console.log(memoizedValue);

  const removePerson= useCallback(
    (id)=>{
    const newPeople= people.filter((person)=>person.id!=id)
    setPeople(newPeople);

  }, [people])

/*    
    Ref: https://youtu.be/DEPwA3mv_R8?si=Fc_AJtDSjtVQ9hdt

    1. The useMemo hook takes two arguments: a function that runs unnecessarily on each render and ** returns ** a value , an array of dependencies.

    2. If one of the values in the dependency array changes, the given function will be executed.

    3. For empty dependency array, the given function will run only on initial render.

    4. As a result, the performance of our React app is improved.

    5. Since we need the return value of this expensive function, we can not use useEffect().


  Important:
  ----------
  
  Primarily, useMemo() is used to maintain the referential integrity for arrays and objects passed as a prop to another component. React.memo() fails to memoize the component
    if any of its props is of reference type. 
    
    This happens because, with each render a new object is created and new reference is passed as a prop. Since, React.memo() performs a shallow comparison (checks if the previous reference is same as the current one; in case of arrays and objects)
    of the props, it makes the component re-render, even if their content remains the same. 
    
    useMemo() ensures to return the same reference of the array or object passed as a prop, hence preventing unnecessary re-renders.
  
  For examples, check out useMemo-usecases.js, https://react.dev/reference/react/useMemo#usage


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
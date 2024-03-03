import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson=(id)=>{
    const newPeople= people.filter((person)=>person.id!=id)
    setPeople(newPeople);

  }
/* 
  Problem Statement:
  ------------------

  1. With this setup, we come across an issue that whenever the count value is increased, the list component also re-renders.  

  2. Though we have wrapped our List component with memo function, there's a gotcha.

  3. When the count is changed, LowerState component re-renders and the removePerson function is made from scratch (and new reference is created) with each render .

  4. As removePerson is given as a prop to the List component, React.memo() finds a new reference while compairing the props.
   Hence, the List component re-renders due to referential disintegrity.

  5. So, the List component also re-renders.

  6. To avoid this, we use useCallback hook.


*/


/* 
  1. The useCallback hook is a hook in React that allows you to memoize a function. 

  2. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies.

  3. The hook will return a memoized version of the function (i.e. the same reference) that only changes if one of the values in the dependency array changes.

  4. If the dependency array is empty, it will only create the function the first time the component is mounted.

  5. As a result, the unnecessary renders can be prevented.

  For further details checkout https://github.com/john-smilga/react-course-v3/blob/main/03-advanced-react/TUTORIAL.md#usecallback

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
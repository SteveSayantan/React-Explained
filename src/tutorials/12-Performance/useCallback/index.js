import { useCallback } from 'react';
import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // For using useCallback hook we need to pass the particular function as an arg.

  const removePerson= useCallback(
    (id)=>{
    const newPeople= people.filter((person)=>person.id!=id)
    setPeople(newPeople);

  }, [people])

/*      
    1. If we keep the dependency array empty, the functionality will fall apart after deleting one item.

    2. That is because, as the dependency array is empty, removePerson function will be created once during the initial render.

    3. It will keep using the old value of people list.

    4. Therefore, we must pass people in dependency array so that each time value of people changes, the function is rebuilt. 

    5. But there are some cases, when we have to use empty dependency array.

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
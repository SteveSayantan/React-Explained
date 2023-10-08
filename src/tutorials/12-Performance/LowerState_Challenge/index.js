import { useState } from 'react';
import { data } from '../../../data';
import Form from './form';
import List from './List';


const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);


  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson}/>
      <List people={people} />
    </section>
  );
};


/* 
    1. Now, during input the state value of the form component changes. Therefore, only that component is re-rendered during input.

    2. While submitting the form, this LowerStateChallenge component re-renders as the people state value is being updated.


*/
export default LowerStateChallenge;
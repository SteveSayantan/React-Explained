import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    addPerson();
    setName('');
  };
  const addPerson = () => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn btn-block' type='submit'>
          submit
        </button>
      </form>
      <List people={people} />
    </section>
  );
};


/* 
    1. In this setup, everytime we input in the corresponding field, the List component re-renders too.

    2. Because, when we are changing the 'name' state value, the LowerStateChallenge component re-renders. As a result, the List component re-renders also.

    3. To avoid this, we need to set a form component separately. 


*/
export default LowerStateChallenge;
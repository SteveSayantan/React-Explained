import { useEffect } from 'react';

const Person = ({ name }) => {
  console.log('render');

 /*  
  useEffect(() => {     // Implementing useEffect does not prevent the component from re-rendering, here we are only invoking what's inside useEffect on initial render. But the component still keeps re-rendering if its parent component re-renders.

    console.log('unfortunately does not fix the issue');
  }, []); 
 */
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
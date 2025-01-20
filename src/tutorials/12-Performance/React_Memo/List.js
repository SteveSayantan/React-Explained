import Item from './Person';
import React from 'react';
// import { memo } from 'react';        // we can use this approach for importing too

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};
export default React.memo(List);        // Passing the component as an arg to React.memo() returns a memoized component.
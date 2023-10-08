import Item from './Person';
import React from 'react';
// import { memo } from 'react';        // we can use this approach too
const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};
export default React.memo(List);        // We have to wrap the component like this while exporting
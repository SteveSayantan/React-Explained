import { useState } from 'react';

const newItems = Array.from({ length: 2000 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/logo192.png' alt='' />
    </div>
  );
});

const SlowComponent = () => {
  const [items, setItems] = useState(newItems);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '2rem',
      }}
    >
      {items}
    </div>
  );
};
export default SlowComponent;
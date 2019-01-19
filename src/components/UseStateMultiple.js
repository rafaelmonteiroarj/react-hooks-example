import React, { useState } from 'react';

const UseState = () => {
  //se define la variable count y su setter utilizando desestructuracion de Arrays
  const [count, setCount] = useState(0);// 0 es el valor inicial
  const [name, setName] = useState('Peter');// Peter es el valor inicial

  return (
    <div>
      Count: { count }
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
  </div>
  );
}

export default UseState;
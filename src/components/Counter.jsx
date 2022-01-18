import React, { useState } from 'react';

const Counter = function () {
  const [count, setCount] = useState(0);

  function incremect() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incremect}>Incremect</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

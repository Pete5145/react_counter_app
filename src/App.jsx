import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
      setCount( count => count + 1);
  }
  function decrement() {
      setCount(count => count - 1);
  }

  let color;
 if (count < 0) {
    color = 'red';
 } else if (count === 0) {
    color = "black";
 } else {
    color = "green"
 }

  return (
    <div className="counter">
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <h2 id="count" style={{ color: color }}>
        {count}
      </h2>
      <button className="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default App
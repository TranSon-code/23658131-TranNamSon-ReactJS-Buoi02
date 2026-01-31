import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const handleIncrease = () => {
    setCount(prev => prev + 1); 
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      
        {}
      <h1 className={`count-text ${count > 10 ? 'text-red' : ''}`}>
        {count}
      </h1>

      <div className="button-group">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
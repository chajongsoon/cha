import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    setNumber(number + 1);
   };

  const decreaseNumber = () => { 
    setNumber(number - 1);
     
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increaseNumber}>+1</button>
      <button onClick={decreaseNumber}>-1</button>
    </div>
  );
};

export default Counter;

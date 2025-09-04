import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  const handleRemove = () => {
    const newCount = count - 1;
    setcount(newCount);
  };

  const counterStyle = {
    border: "5px solid green",
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Counter;

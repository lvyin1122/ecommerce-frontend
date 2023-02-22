import React from "react";
import { useState } from "react";

function Counter() {
  // Initilize the count state with 0
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // Update the count state by adding 1
    setCount(prevState =>  prevState + 1);
  };

  return (
    // Add clickHandler to the button
    <button onClick={clickHandler}>You have clicked {count} times.</button>
  );
}

export default Counter;
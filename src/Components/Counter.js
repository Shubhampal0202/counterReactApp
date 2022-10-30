import React, { useState } from 'react'
import "./Counter.css";
export default function Counter(props) {
  let number = props.number;
  const [count, setCount] = useState(0);
  if (number == Number(props.counterNumVal) && count != Number(props.counterVal)) {// 2nd condition avoid the 
    // too many re- rendering
    console.log(".............")
    setCount(Number(props.counterVal));
    props.resetParentProps(); // when revise your project think about it.
  } else {
    console.log("I should not change ");
  }
  const incrementCounter = () => {
    console.log("---------------");
    setCount(Number(count) + 1);
  }

  const decrementCounter = () => {
    setCount(Number(count) - 1);
  }

  return (
    <div className='counter'>
      <h2>Counter Number {number}</h2>
      <div className='counter-content'>
        <button onClick={incrementCounter} className="btn">+</button>
        <p><strong>Count : {count}</strong> </p>
        <button onClick={decrementCounter} className="btn">-</button>
      </div>
    </div>
  )
}

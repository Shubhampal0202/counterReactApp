import React, { useState } from 'react'
import "./ResetBoxes.css"
export default function ResetBoxes(props) {
  let resetParentCounter = props.resetParentCounter;
  const [countNumberValue, setCountNumberValue] = useState("");
  const [countVal, setCountVal] = useState("");
  const setCounter = () => {
    resetParentCounter(countNumberValue, countVal);
    setCountNumberValue("");
    setCountVal("");
  }
  return (
    <div className='resetCounterContainer'>
      <h2>Reset Counter</h2>
      <div className='counter-num'>
        <span><strong className='strong'>Counter Number :</strong> </span>
        <input value={countNumberValue} onChange={(e) => setCountNumberValue(e.target.value)} className="inputNumber"/>
      </div>
      <div className='counter-val'>
        <span><strong className='strong'>Reset Value :</strong> </span>
        <input value={countVal} onChange={(e) => setCountVal(e.target.value)} className="inputValue" /></div>
      <button className='reset-btn' onClick={setCounter}>Reset Counter</button>
    </div>
  )
}

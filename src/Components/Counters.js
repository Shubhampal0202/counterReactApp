import React from 'react'
import Counter from './Counter'
import "./Counters.css"
export default function Counters(props) {
  const {counterNumVal,counterVal,resetParentProps} = props;

  console.log("counters " + counterNumVal + " " + counterVal);
  return (
    <div className='counters'>
      <Counter number ={1} counterNumVal={counterNumVal} counterVal ={counterVal} resetParentProps={resetParentProps}/>
      <Counter number ={2} counterNumVal={counterNumVal} counterVal ={counterVal} resetParentProps={resetParentProps}/>
      <Counter number ={3} counterNumVal={counterNumVal} counterVal ={counterVal} resetParentProps={resetParentProps}/>
    </div>
  )
}

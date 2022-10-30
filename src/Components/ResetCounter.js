import React, {useState} from 'react'
import Counters from './Counters'
import ResetBoxes from './ResetBoxes'

export default function ResetCounter() {
    const [counterNumVal, setCounterNumVal] = useState("");
    const [ counterVal, setCounterVal] = useState("");
    const resetParentCounter = (countNumberValue, countVal)=>{
       console.log("parent " + countNumberValue + " " + countVal )
       setCounterNumVal(countNumberValue);
       setCounterVal(countVal);
    }
    const resetParentProps = ()=>{
        setCounterNumVal("");
        setCounterVal("");
     }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Reset Counter App</h1>
        <div style={{border:"2px solid gray"}}></div>
        <ResetBoxes resetParentCounter = {resetParentCounter} />
        <div style={{border:"1px solid gray"}}></div>
        <Counters counterNumVal ={counterNumVal} counterVal={counterVal} resetParentProps={resetParentProps}/>
    </div>
  )
}

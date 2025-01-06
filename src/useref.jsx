import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
function Useref() {
    // let[Count,setCount]=useState(0);
    let use1=useRef('');
    // let increment =()=>{
    //     // setCount(Count+1);
    //     countRef.current++;
    //     console.log("state",Count);
    //     console.log("ref",countRef.current);
    // }
    function display(e){
        use1.current=e.target.value;
        console.log(use1.current);
    }
  return (
    <>
   {/* <h1>
    count:{Count}
   </h1>
   <button onClick={increment}>increment</button>
   <button onClick={increment}>Useref</button> */}
   <input type='text'onChange={(e)=>display(e)}/>
   </>
  )
}

export default Useref
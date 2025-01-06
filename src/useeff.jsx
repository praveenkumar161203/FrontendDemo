import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function Useeff() {
    let[Count,setCount]=useState(0);
    useEffect(()=>{
        console.log("value updated");
        return ()=>{ ////optional
            console.log("cleanup");
        }
    },[Count])
  return (
    <>
   <h1>
    count:{Count}
   </h1>
   <button onClick={()=>setCount(Count+1)}>increment</button>
   <button onClick={()=>setCount(Count-1)}>decrement</button>
   </>
  )
}

export default Useeff
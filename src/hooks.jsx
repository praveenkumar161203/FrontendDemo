import React from 'react'
import { useState } from 'react';
const Hooks = (props) => {
    let [name, setName] = useState("");
    let [number,setNumber]=useState(10);
  return (
   <>
        
        Name:<input type='text' id='name'value={name} />
        onchangeName:<input type='text' id='name'value={name} onChange={(e)=>setName(e.target.value)} />
        <h1>Number:{number}</h1>
        <button onClick={()=>setNumber(number+props.value)}>Click Me</button>
    </>

  )
}

export default Hooks
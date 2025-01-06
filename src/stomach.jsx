import React, { createContext, useState } from 'react'
import { useContext } from 'react'
// import { nameContext } from './App'
import { colorContext } from './App'
const Stomach = () => {
  let[bgcolor,setColor]=useState("white")
  let[txtcolor,setColor1]=useState("black")
  let color=useContext(colorContext);
  function handleClick(){
    setColor(color.bg);
    setColor1(color.txt)
  }
  // let val=useContext(nameContext)
  return (
    <div><h1 style={{backgroundColor:bgcolor,color:txtcolor}}>Stomach</h1>
    {/* <h1>Need:{val.name} and age:{val.age}</h1> */}
    <button onClick={handleClick}>Click to change color</button>
    {/* <h1>Need:{props.name}</h1> */}
    </div>
  )
}

export default Stomach

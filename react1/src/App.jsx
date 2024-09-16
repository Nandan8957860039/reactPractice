// import { useState } from 'react'
 import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
// import './App.css'

// function App(){
//   const[count,setCount]=useState(35)
//   const addValue=()=>{
  
//     setCount(count+1)
//   }

//   const removeValue=()=>{
  
//     setCount(count-1)
// }

// return(
//   <>
//   <h1>hello interviewr{count}</h1>
  
//   <button onClick={addValue}>Add value{addValue}</button>
//   <button onClick={removeValue }>remove{removeValue}</button>
// </>
// )
// }
// export default App


import {useState} from "react";
import "./App.css"
function App()
{
  const [count,setCount]=useState(39)

  const addValue=()=>
  {
    setCount(prevcount=>prevcount+1)
  }
  const removeValue=()=>
  {
    setCount(prevcount=>prevcount-1)
  }
return(
  <>
<h1>hello coders</h1>
<h2>Complete the task {count}</h2>
<button onClick={addValue}>addvalue</button>
<button onClick={removeValue}>removeValue</button>
 </>
)  
}
export default  App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let value =0
  
  let [counter,setcounter] =useState(value); //this is hooks for "usestate" which return the two values in array form 0th index has variables and another 1st index has function which using that varibles........
  const addvalue = () => {
    console.log("anupam",counter);
    value=counter
    setcounter((counter)=> counter+1);
    setcounter((counter)=> counter+1);
    setcounter((counter)=> counter+1);
    setcounter((counter)=> counter+1);
    setcounter((counter)=> counter+1);
  }
  let counter2 =counter
  // let [counter2,setcounter] =useState(value);
  const removevalue = () =>{
     counter2=counter-1;
    setcounter(counter2)

  }

  return (
    <>
    <h1>chai aur React</h1>
    <h2>Counter Value:{counter}
    </h2>
    <button onClick={addvalue}>Increase value {counter}</button>
    <br />
    <button   onClick={removevalue}>Decrease Value {counter2}</button>
    </>
  )
}

export default App

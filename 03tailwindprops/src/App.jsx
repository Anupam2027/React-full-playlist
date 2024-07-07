import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  const myobj={
    name:"Anupam",
    name2:"sonu",
    age:21
  }

  const myArr=["sonu","Anupam",21,"paglu"]

  return (
    <>
      <h1 className='bg-green-300  text-2xl text-black p-5 rounded-xl'>Tailwind Css</h1>
      {/* <Card  channel="chaiaurcode"  someobj={myobj}/>    here we pass any value in {} curely  braces which is make props  
      <Card channel="sonu" someArr={myArr}/> */}
      <Card username={myobj.name2} btnText="Dudu"/>
      <Card username={myobj.name} btnText="Bubu"/>
    </>
  )
}

export default App

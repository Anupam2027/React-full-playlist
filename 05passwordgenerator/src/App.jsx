import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {
  const [length,setLength]= useState(8)
  // take usestate because we have to track the length which is updated and do something action and also shown in ui that's why we taken "usestate"

  const [numberAllowed,setnumberAllowed]= useState(false)  
  //this we have to taken because we also include some numbers in my password that's why  we have to included and take true false value

  
  const [charAllowed,setcharAllowed] = useState(false)  
  //same as number case this is taken for special charater inclusion and this is also effect the use and do some function after updation that's why taken "useState"

  const [password,setPassword] = useState("") //also for input field 

//useCallback Hook 

  const passwordgenerator = useCallback(() => {
    let pss = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+= "0123456789" 
    if (charAllowed) str+= "!@#$%^&*()_+~`?[]{}()"
    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pss += str.charAt(char);
    }
    setPassword(pss)
  },[length,numberAllowed,charAllowed,setPassword])


 //useEffect hook 
  useEffect(() => {
    passwordgenerator()
  }, [length,numberAllowed,charAllowed,passwordgenerator])

//useRef Hook
const passwordRef = useRef(null)  

const copypastetoclipboard = useCallback(()=> {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password]) 

  return (
    <>
    <div className="w-full max-w-md  mx-auto shadow-xl rounded-md px-4  py-3 my-8 text-orange-500 bg-gray-700 text-center">
    <h1 className="text-white text-center my-3 md:font-bold ">Password Generator</h1>
      <div className="flex shadow rounded-lg  mb-4 overflow-hidden ">
        <input 
        type="text"
        value={password}
        placeholder="password"
        className="outline-none w-full px-1 py-3"
        readOnly
        ref={passwordRef}
        />
        <button onClick={copypastetoclipboard} className="outline-none bg-blue-800  text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm  gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=> {setLength(e.target.value)}}
           />
           <label >Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

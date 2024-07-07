import { useState } from "react"

function App() {
  
const [colour,setcolour] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-lg">
          <button onClick={() => setcolour("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={() => setcolour("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"Green"}}>
            Green
          </button>
          <button onClick={() => setcolour("purple")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"purple"}}>
          Purple
          </button>
          <button onClick={() => setcolour("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"black"}}>
            Black
          </button>
          <button onClick={() => setcolour("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"Pink"}}>
            Pink
          </button>
          <button onClick={() => setcolour("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button  onClick={() => setcolour("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"Blue"}}>
          Blue
          </button>
          <button onClick={() => setcolour("grey")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"grey"}}>
            Grey
          </button>
          <button onClick={() => setcolour("brown")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"Brown"}}>
          Brown
          </button>
          <button onClick={() => setcolour("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={() => setcolour("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"white"}}>
          White
          </button>
          <button onClick={() => setcolour("violet")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"violet"}}>
          Violet
          </button>
          <button onClick={() => setcolour("teal")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"teal"}}>
            Teal
          </button>
          <button onClick={() => setcolour("cyan")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"cyan"}}>
            Cyan
          </button>
          <button onClick={() => setcolour("coral")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor:"coral"}}>
          Coral
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

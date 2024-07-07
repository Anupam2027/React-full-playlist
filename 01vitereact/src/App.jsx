import  Chai from "./chai"

//now we are learning about veriable injection in JSX...........
function App() {
  const username = "Chai aur react"  //here we use {} for inject varibles or js in jsx
  return (
    <>
      <h1>Chai aur Code || Anupam Mishra  {username} </h1>
    <Chai/>
    <h3>Anupam</h3>
    </>
    
  )
}

export default App

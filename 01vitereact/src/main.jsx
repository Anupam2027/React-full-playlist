import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Anupam with react !</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'

//   },
//   children : 'Click me to visit google'

// }

const anotherreact = "chai aur Code"

const reactElement2 = React.createElement('a',{href :'https://google.com',target : '_blank'},'Click me to visit googleeeee',anotherreact)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click to visit </a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement2
  
)

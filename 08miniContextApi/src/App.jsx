import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
function App() {
  return (
    <UserContextProvider>
      <h1>React with context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App

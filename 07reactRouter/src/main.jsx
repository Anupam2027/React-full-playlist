import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home/Home1/Home'
import About from './component/Home/About/About'
import Contact from './component/Home/Contact/Contact'
import User from './component/Home/User/User'
import  Github, { githubInfoLoader }  from './component/Home/Github/Github'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children : [
//       {
//         path: "",
//         element : <Home />
//       }
//       ,
//       {
//        path:"about",
//        element :<About />
//       },
//       {
//        path:"contact",
//        element : <Contact />
//       }

//     ]
//   }
// ]
// )

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='User/:Userid' element={<User/>}/>
     <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

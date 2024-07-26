import React from 'react'
import Footer from './src/component/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Outlet />
     <Footer /> 
    </>
  )
}

export default Layout

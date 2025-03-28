import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root
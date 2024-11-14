import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
const token = sessionStorage.getItem("token");
// const navigate = useNavigate();

  return (
    <>
    {
        <Navbar/>
        // token === "token" ? <Navbar/> : navigate("/login")
    }
      
    </>
  )
}

export default Layout

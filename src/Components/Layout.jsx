import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
const token = sessionStorage.getItem("token");
const navigate = useNavigate();

  return (
    <>
    {
        token === "token" ? <Navbar/> : navigate("/login")
    }
      
      {/* <Login/> */}
    </>
  )
}

export default Layout

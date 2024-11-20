import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
// const token = sessionStorage.getItem("token");
// // const navigate = useNavigate();
// const access = localStorage.getItem("accessToken");

  return (
    <>
    {/* { access != null ? <>(<Navbar/>)</> : <>()</>
        // 
       
    } */}
    
      <Navbar/>
    </>
  )
}

export default Layout

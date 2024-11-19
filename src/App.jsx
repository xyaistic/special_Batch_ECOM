import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import AllProducts from './Components/AllProducts'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import WishList from './Components/WishList'
import Category from './Components/Category'
import Registration from './Components/Registration'
import SingleProduct from './Components/SingleProduct'
import ConfirmedOrder from './Components/ConfirmedOrder'



function App() {


  return (
    <>
     <Navbar/>
     
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}  />
        <Route path='/product' element={<AllProducts/>}  />
        <Route path='/profile' element={<Profile/>}  />
        <Route path='/wishlist' element={<WishList/>}  />
        <Route path='/allCategory' element={<Category/>} />
        <Route path='/SingleProduct' element={<SingleProduct/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/ConfirmedOrder' element={<ConfirmedOrder/>} />
       
        
      </Routes>
    </>
  )
}

export default App

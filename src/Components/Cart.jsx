import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <Link to={PlaceOrder}>
      <button className='text-red'>click me</button>
      </Link>
    </div>
  )
}

export default Cart

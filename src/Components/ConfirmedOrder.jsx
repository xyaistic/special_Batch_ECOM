import React from 'react'
import img from '../assets/Img/thank-you.png'

export default function ConfirmedOrder () {

  
  
    return (
        <>
      <div className='border m-15 p-9 flex bg-blue-200 flex-col'>
        <div>
        
        <img className="h-20 w-15 "
src={img}
alt="my image"
/>
      </div>
      <h1 className='text-4xl font-bold'>Thanks for your order!</h1>
      <div>
        <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex repellat dolore dolorum. Blanditiis minima quos, distinctio dolorum laudantium deleniti, recusandae unde vel quas numquam nihil et, in quia animi.</p>

      </div>
      <button className='w-1/2 h-10 mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'>
        Shop Now
      </button>
      </div>
      </>
    )
  }

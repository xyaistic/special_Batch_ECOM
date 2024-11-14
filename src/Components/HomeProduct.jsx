import React from 'react';
import image from '../assets/Img/img.jpg'
export default function homeProduct ({item}) {
    return (
        <>
        <div  className='border w-1/6 flex justify-center items-center flex-col'>
        
        <img src={image} className='w-full object' />
       <p className=' h-20 text-center text-3xl text-bold text-decoration-style: solid;'> {item} </p>


        </div>
        </>
    )
}

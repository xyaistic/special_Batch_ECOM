import React from 'react';
import image from '../assets/Img/img.jpg'
export default function homeProduct ({item}) {
    return (
        <>
        <div  className='border-2 border-black shadow-slate-600 shadow-lg square-lg w-1/4 hover:border-4 border-zinc-800'>
        
        <img src={image}/>
       <p className='text-center text-3xl text-bold text-decoration-style: solid;'> {item} </p>


        </div>
        </>
    )
}

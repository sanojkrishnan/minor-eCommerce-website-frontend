import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div className='h-full w-full absolute top-0 bg-white/40 backdrop-blur-sm'>
        <div className='flex h-full items-center justify-center'>
            
        <img className='loading max-h-20 w-auto' src='/Shopping-cart-icon-18.png'/>
            </div>
    </div>
  )
}

export default Loading
import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div className='h-full z-20 w-full absolute top-0 bg-white/40 backdrop-blur-sm'>
        <div className='flex h-full items-center justify-center'>
          <div className='loading'>
        <img className=' max-h-10 w-auto ' src='/Shopping-cart-icon-18.png'/>
              </div>  
            </div>
    </div>
  )
}

export default Loading
import React from 'react'
import Card from '../Component/Card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <Link to={"/product/id"}>
      <Card />  
      </Link>

    </div>
  )
}

export default Home
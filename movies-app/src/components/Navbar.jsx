import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex space-x-8 item-center '>
        <Link 
            className='text-blue-800 text-3xl font-bold'
            to='/'>
            Movies
        </Link>
        <Link 
            className='text-blue-500 text-3xl font-bold'
            to='/watchlist'>
            Watchlist
        </Link>
    </div>
  )
}

export default Navbar
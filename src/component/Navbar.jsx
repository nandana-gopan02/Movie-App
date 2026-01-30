import React from 'react'
import Logo from '../assets/Movie_logo.png'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-full '>
      <div className='bg-white flex space-x-10 items-center pl-3 py-1'>
      <img className='w-18'  src={Logo} alt="" />

      <Link to="/" className='text-red-900 text-2xl font-semibold font-sans'>Home</Link>
      <Link to="/watchlist" className='text-red-900 text-2xl font-semibold font-sans'>WatchList </Link>

    </div>

    </div>

  )
}

export default Navbar

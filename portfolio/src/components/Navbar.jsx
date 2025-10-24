import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
  <>
  <nav>
    <div className='main-con py-6 flex justify-between items-center'>
        <img src={logo} alt="logo" className='h-10 w-auto' />
        <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='inline-block w-4 lg:w-12 h-0.5 bg-white'></span>
            <span className='inline-block w-4 lg:w-12 h-0.5 bg-white'></span>
            <span></span>
        </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar

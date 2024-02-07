import React from 'react';
import logo from './Assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='p-2 flex lg:px-10 md:px-5 sm:px-5 justify-between items-center w-full' style={{ background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)' }}>
      <div className='flex items-center'>
        <img src={logo} className='w-10 h-10 md:w-12 md:h-12 shadow-2xl rounded-full' alt='Logo' />
      </div>
      <div className='flex justify-around gap-3 md:gap-5 font-bold cursor-pointer text-white mt-3 md:mt-0 lg:text-lg md:text-base sm:text-sm'>
        <Link to='/' className='hover:text-gray-300'>Home</Link>
        <Link to='/About' className='hover:text-gray-300'>About</Link>
        <Link to='/Projects' className='hover:text-gray-300'>Projects</Link>
        <Link to='/Blog' className='hover:text-gray-300'>Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;

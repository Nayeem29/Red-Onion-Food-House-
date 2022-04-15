import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo2.png';
// import { HiShoppingCart } from '@heroicons/react/solid';
import { HiShoppingCart } from "react-icons/hi";
const Header = () => {
  return (
    <div className='flex justify-between my-3'>
      <div className="logo">
        <img className='w-1/3 px-8' src={logo} alt="" />
      </div>
      <div className='flex justify-between items-center px-6'>
        <NavLink to='/cart' className='mx-6'>
          <HiShoppingCart className="h-8 w-8 text-black-500" />
        </NavLink>
        <NavLink to='/login' className='mx-6 text-xl font-semibold'>
          Login
        </NavLink>
        <NavLink to='/signup' className='mx-6 text-xl px-5 py-1 text-white font-semibold border-0 rounded-full bg-red-400'>
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
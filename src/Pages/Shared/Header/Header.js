import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../Images/logo2.png';
// import { HiShoppingCart } from '@heroicons/react/solid';
import { HiShoppingCart } from "react-icons/hi";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <div className='flex justify-between my-3'>
      <div className="logo">
        <Link to={'/home'}>
          <img className='w-1/3 px-8' src={logo} alt="" />
        </Link>
      </div>
      <div className='flex justify-between items-center px-6'>
        {
          user && <NavLink to='/orders'>Orders</NavLink>
        }
        <NavLink to='/cart' className='mx-6'>
          <HiShoppingCart className="h-8 w-8 text-black-500" />
        </NavLink>
        {
          user ?
            <button
              onClick={() => logout()}
              className='mx-6 text-xl font-semibold'
            >Sign out</button>
            :
            <NavLink to='/login' className='mx-6 text-xl font-semibold'>
              Login
            </NavLink>}
        <NavLink to='/signup' className='mx-6 text-xl px-5 py-1 text-white font-semibold border-0 rounded-full bg-red-400'>
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
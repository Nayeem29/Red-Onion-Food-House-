import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import google from '../../Images/google.png';
import github from '../../Images/github.png';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorELement;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = email.current.value;
    signInWithEmailAndPassword(email, pass);
  }

  if (user) {
    navigate('/home')
  }
  if (loading) {
    return <Spinner />
  }
  if (error) {
    errorELement = <p>Error: {error.message}</p>
  }
  return (
    <>
      <h1 className='text-center text-3xl font-medium mt-8 text-red-400'>Please Login here!!!</h1>
      <div className='flex items-center justify-center border-0 rounded-lg my-12'>
        <form onSubmit={handleSubmit} className='my-6 border-x-rose-700'>

          <input type="email" placeholder='Your Email' size='50' height='15' ref={emailRef} required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />
          <br />
          <input type="password" id="pass" placeholder='Password' size='50' ref={passwordRef} required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />

          <br />

          {errorELement}
          <button
            className='mx-auto mt-3 block border-2 px-4 py-1 rounded-full bg-red-400 text-white h-12 w-40'
          >Login</button>

          <button
            className='mx-auto mt-3 block border-2 pl-4 py-1 rounded-full bg-red-400 text-white h-12 w-3/4'
          >
            <img className='w-8 h-8 inline-block' src={google} alt="" />
            <span className='pl-2'>Google Sign in</span>
          </button>

          <button
            className='mx-auto mt-3 block border-2 pl-4 py-1 rounded-full bg-red-400 text-white h-12 w-3/4'
          >
            <img className='w-8 h-8 inline-block' src={github} alt="" />
            <span className='pl-2'>Git hub Sign in</span>
          </button>
        </form>
      </div>
      {errorELement}
      <p className=' text-center'>
        <small className='text-sm'>
          New to Red Onion?
        </small>
        <Link to='/signup' className='text-red-400 pl-2'>Sign up</Link>
      </p>
    </>
  );
};

export default Login;
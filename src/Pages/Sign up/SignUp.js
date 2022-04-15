import React, { useRef, useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  let errorELement;
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      createUserWithEmailAndPassword(email, password);
      console.log(user?.user);
      navigate('/login');
    }
    if (user) {
      console.log(user.user);
    }

    if (loading) {
      return <Spinner />
    }
    if (error) {
      errorELement =
        <div>
          <p>Error: {error?.message}</p>
        </div>
    }

  }

  return (
    <>
      <h1 className='text-center text-3xl font-medium mt-8 text-red-400'>Please Register!!!</h1>
      <div className='flex items-center justify-center border-0 rounded-lg my-12'>
        <form onSubmit={handleSubmit} className='my-6 border-x-rose-700'>
          <input type="text" placeholder='Your Name' size='50' required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />
          <br />
          <input type="email" placeholder='Your Email' size='50' height='15' ref={emailRef} required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />
          <br />
          <input type="password" id="pass" placeholder='Password' size='50' ref={passwordRef} required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />
          <br />
          <input type="password" id="confirmPass" placeholder='Confirm Password' size='50' ref={confirmPasswordRef} required
            className='py-1 my-2 pl-5 border-0 outline-none outline-red-400 rounded-2xl h-10'
          />
          <br />
          <input type="checkbox" name="terms" id="terms"
            className='ml-5 my-5'
            onClick={() => { setAgree(!agree) }}
          />
          <label htmlFor="terms" className={`${agree ? "text-blue-500" : "text-red-700"}`}> Accept terms and conditions</label>
          <br />
          {errorELement}
          <button
            disabled={!agree}
            className='mx-auto block border-2 px-4 py-1 rounded-full bg-red-400 text-white h-12 w-40'
          >Submit</button>
        </form>
      </div>
      <p className=' text-center'>
        <small className='text-sm'>
          Already have an account?
        </small>
        <Link to='/login' className='text-red-400 pl-2'>Login</Link>
      </p>
    </>
  );
};

export default SignUp;  
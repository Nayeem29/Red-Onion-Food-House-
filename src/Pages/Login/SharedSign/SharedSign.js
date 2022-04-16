import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../Images/google.png';
import github from '../../../Images/github.png';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';


const SharedSign = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElem;
  if (googleUser || gitUser) {
    navigate('/home')
  }
  if (googleLoading || gitLoading) {
    return <Spinner />;
  }

  if (googleError || gitError) {
    errorElem = <p>Error: {googleError?.message}{gitError?.message}</p>
  }

  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <div className='h-1 w-1/2 bg-red-400'></div>
        <p className='px-2'>or</p>
        <div className='h-1 w-1/2 bg-red-400'></div>
      </div>
      <button
        onClick={() => {
          signInWithGoogle()
        }}
        className='mx-auto mt-3 block border-2 pl-4 py-1 rounded-full bg-red-400 text-white h-12 w-3/4'
      >
        <img className='w-8 h-8 inline-block' src={google} alt="" />
        <span className='pl-2'>Google Sign in</span>
      </button>

      <button
        onClick={() => {
          signInWithGithub()
        }}
        className='mx-auto mt-3 block border-2 pl-4 py-1 rounded-full bg-red-400 text-white h-12 w-3/4'
      >
        <img className='w-8 h-8 inline-block' src={github} alt="" />
        <span className='pl-2'>Git hub Sign in</span>
      </button>
      {errorElem}
    </div>
  );
};

export default SharedSign;
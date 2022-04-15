import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='searchBar bg-gradient-to-t bg-contain h-screen'>
        <h1 className='text-5xl text-center pt-16'>Best Food waiting for your belly...</h1>
        <div className='text-center text-3xl border-0 rounded-2xl py-6 mt-12'>
          <input className='mx-3 py-2 px-6 w-1/2 text-lg border-0 rounded-full outline-none relative'
            type="text" name="search" id="search" placeholder='search your food here' />
          <button className='border-2 rounded-3xl px-8 py-2 text-lg text-white text-center bg-red-400 absolute right-80'>Search</button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div>
          <button className='mx-12 font-semibold'>Breakfast</button>
        </div>
        <div>
          <button className='mx-12 font-semibold'>Lunch</button>
        </div>
        <div>
          <button className='mx-12 font-semibold'>Dinner</button>
        </div>
      </div>
      <div className='my-12  '>
        <button className='border-2 font-medium block mx-auto px-12 bg-gray-600 text-white rounded-lg py-2'>Checkout your food</button>
        <div className='ml-12 mt-12 '>
          <p className='text-3xl font-medium'>Why Choose us</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iure ipsum obcaecati soluta ab, facere nulla.</p>
        </div>
      </div>

    </>
  );
};

export default Home;
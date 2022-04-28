import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
  const { picture, name, gender, email, about, _id } = chef;
  let navigate = useNavigate();
  const handleCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  }
  return (
    <div className='border-2 rounded-2xl relative my-5'>
      <div>
        <img className='w-full h-60 mx-auto border-0 rounded-t-2xl' src={picture} alt="" />
        <h1 className='text-center text-2xl font-semibold'>{name}</h1>
        <p className='text-center'>{email}</p>
        <p className='text-center'>{gender}</p>
        <p className='text-center mb-12'>{about}</p>
      </div>
      <div className='pt-5 absolute bottom-0 w-full '>
        <button onClick={() => handleCheckOut(_id)}
          className='px-5 py-1 w-full border-0 rounded-b-lg text-lg font-bold text-white bg-red-400
      '>Hire me</button>
      </div>
    </div>
  );
};

export default ChefDetails;
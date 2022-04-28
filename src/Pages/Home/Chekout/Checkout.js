import React from 'react';
import { useParams } from 'react-router-dom';
import { useChefs } from '../../../CustomHooks/useCustomHooks';

const Checkout = () => {
  const [chefs] = useChefs();
  const params = useParams();
  const id = params.chefId;
  const selectedChef = chefs.find(chef => chef._id === id);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const comments = e.target.comments.value;
    const mobile = e.target.mobile.value;
    e.target.reset();
    const orders = {
      'name': name,
      'email': email,
      'address': address,
      'comments': comments,
      'mobile': mobile
    };
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>This is Checkout form page</h1>
      <div className='grid grid-cols-2 gap-5 mx-10 mt-12'>
        <div>
          <img className='w-3/4 h-auto border-0 rounded-full' src={selectedChef?.picture} alt="" />
          <h1 className='text-2xl font-bold mx-24 mt-12'>{selectedChef?.name}</h1>
        </div>
        <div className='flex items-center justify-center'>
          <form onSubmit={handleFormSubmit}>
            <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name="name" placeholder='Name' required size='40' /> <br />
            <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="email" name="email" placeholder='Email' required size='40' /> <br />
            <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name='address' placeholder='Address' required size='40' /> <br />
            <textarea className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name='comments' placeholder='Comments' required size='40' /> <br />
            <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="number" name="mobile" placeholder='mobile' required size='40' /> <br />
            <input className='my-3 px-10 py-2 bg-red-400 text-white text-xl font-semibold cursor-pointer border-2 rounded-xl outline-none' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
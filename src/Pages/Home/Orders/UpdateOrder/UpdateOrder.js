import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../../../CustomHooks/useCustomHooks';

const UpdateOrder = () => {
  const params = useParams();
  const id = params.id;
  const [orders, setOrders] = useOrders();
  const updatedOrder = orders.find(order => order._id === id);
  // console.log(updatedOrder);
  const handleUpdatedForm = (event) => {
    console.log(event);
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const comments = event.target.comments.value;
    const mobile = event.target.mobile.value;
    // e.target.reset();
    const orders = {
      name,
      email,
      address,
      comments,
      mobile
    };
    console.log(orders);
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
      .then(res => res.json())
      .then(data => {
        console.log("success", data);
        alert('Update has been successfull');
        event.target.reset();
      })
  }

  return (
    <div>
      <h2>Updating id : {updatedOrder?.name}</h2>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleUpdatedForm}>
          <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name="name" placeholder='Name' required size='40' /> <br />
          <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="email" name="email" placeholder='Email' required size='40' /> <br />
          <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name='address' placeholder='Address' required size='40' /> <br />
          <textarea className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="text" name='comments' placeholder='Comments' required size='40' /> <br />
          <input className='my-3 px-5 py-1 border-red-400 border-2 rounded-xl outline-none' type="number" name="mobile" placeholder='mobile' required size='40' /> <br />
          <input className='my-3 px-10 py-2 bg-red-400 text-white text-xl font-semibold cursor-pointer border-2 rounded-xl outline-none' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateOrder;
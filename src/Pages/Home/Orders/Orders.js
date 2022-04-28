import React from 'react';
import { useOrders } from '../../../CustomHooks/useCustomHooks';
// import useOrders from '../../../CustomHooks/useCustomHooks';

const Orders = () => {
  const [orders, setOrders] = useOrders();
  return (
    <div>
      <h2 className='text-center text-3xl font-bold text-red-400'>Your Orders here:</h2>
      {
        orders.map(order => <div className='flex items-center justify-center my-5 mx-8'
          key={order._id}>
          <div className='border-2 border-red-300 rounded-2xl p-5'>
            <p>{order.name}</p>
            <p>{order.email}</p>
            <p>{order.address}</p>
            <p>{order.comments}</p>
            <p>{order.mobile}</p>
          </div>
          <button className='px-3'>X</button>
        </div>)
      }
    </div>
  );
};

export default Orders;
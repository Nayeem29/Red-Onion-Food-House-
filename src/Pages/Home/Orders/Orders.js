import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../../CustomHooks/useCustomHooks';

const Orders = () => {
  const [orders, setOrders] = useOrders();
  const handleDeleteButton = (id) => {
    const proceed = window.confirm('Are you sure want to delete this??');
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        })
    }
  }

  const navigate = useNavigate();
  const handleUpdateButton = (id) => {
    navigate(`/orders/${id}`);
  }
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
          <button onClick={() => handleUpdateButton(order._id)} className='px-3 ml-2 bg-red-400 text-white border-0 rounded-2xl'>Update</button>
          <button onClick={() => handleDeleteButton(order._id)} className='px-3'>X</button>
        </div>)
      }
    </div>
  );
};

export default Orders;
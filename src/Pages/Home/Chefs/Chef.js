import React from 'react';
import { useChefs } from '../../../CustomHooks/useCustomHooks';
// import useChefs from '../../../CustomHooks/useCustomHooks';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chef = () => {
  const [chefs] = useChefs();
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold'>Our amazing Chefs who are at your services</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 mx-6 mt-8'>
        {
          chefs.map(chef =>
            <ChefDetails key={chef._id} chef={chef}></ChefDetails>)
        }
      </div>
    </div>
  );
};

export default Chef;
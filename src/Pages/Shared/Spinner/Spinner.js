import React from 'react';

const Spinner = () => {
  return (
    <div className='mt-3'>
      <div className="flex items-center justify-center">
        <div className="spinner-border text-red-400 animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
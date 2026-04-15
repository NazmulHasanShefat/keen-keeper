import React from 'react';
import ChartComponents from './ChartComponents';

const stats = () => {
  return (
    <section className='px-5'>
     <h1 className='lg:text-[48px] md:text-[48px] text-[30px] font-bold'>Friendship Analytics</h1>
     <p className='text-base text-gray-400'>By Interaction Type</p>
     <ChartComponents /> 
    </section>
  );
};

export default stats;
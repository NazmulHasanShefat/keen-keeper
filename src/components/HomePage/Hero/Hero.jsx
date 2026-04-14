import React from 'react';

const Hero = () => {
    return (
        <section className='hero block my-20 px-5'>
           <h1 className='text-5xl font-bold text-center mt-15 '>Friends to keep close in your life </h1>
           <p className='text-center max-w-xl mt-3 text-gray-500 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
           <div className='button_container flex justify-center'>
            <button className='bg-[#244D3F] text-white px-4 py-2 rounded-xl hover:opacity-70 cursor-pointer mt-3'>+ Add a friend</button>
           </div>

           <div className='scoresection grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 mt-10'>
            <div className='score_card py-5 px-15 shadow-lg flex flex-col items-center'>
                <div className='text-5xl font-bold'>10</div>
                <div className='text-gray-400'>total friend</div>
            </div>
            <div className='score_card py-5 px-15 shadow-lg flex flex-col items-center'>
                <div className='text-5xl font-bold'>10</div>
                <div className='text-gray-400'>On Track</div>
            </div>
            <div className='score_card py-5 px-15 shadow-lg flex flex-col items-center'>
                <div className='text-5xl font-bold'>10</div>
                <div className='text-gray-400'>Need Attention</div>
            </div>

            <div className='score_card py-5 px-15 shadow-lg flex flex-col items-center'>
                <div className='text-5xl font-bold'>10</div>
                <div className='text-gray-400'>Interactions This Month</div>
            </div>
           </div>
        </section>
    );
};

export default Hero;

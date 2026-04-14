import React from 'react';
import FriendDetailsLeft from './FriendDetailsLeft';
import FriendDetailsRight from './FriendDetailsRight';

const FriendDetails = async ({params}) => {
    const { slug } = await params;
    console.log(slug)
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 w-full my-10 max-w-[1280.1px] mx-auto'>
            <div className='lg:col-span-1'>
                <FriendDetailsLeft />
            </div>
            <div className='lg:col-span-3'>
                <FriendDetailsRight />
            </div>
        </div>
    );
};

export default FriendDetails;
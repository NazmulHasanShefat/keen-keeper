import React from 'react';

const FriendsAll = ({ className }) => {

    return (
        <div className={`all_friends mx-auto px-5 lg:px-0 w-full ${className}`}>
            <h1 className='w-full text-5xl block font-bold'>Friends all</h1>
             <div className='grid grid-cols-4 items-center justify-center gap-10'>
                <div className='friends_card'>
                    
                </div>
             </div>
        </div>
    );
};

export default FriendsAll;
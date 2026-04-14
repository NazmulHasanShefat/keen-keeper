import Image from 'next/image';
import React from 'react';
import iconBell from "../../../assets/icons/BellSimpleZ.png";
import archiveIcon from "../../../assets/Archive.png";
import trashIcon from "../../../assets/Trash.png";

const FriendDetailsLeft = () => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={'/file.svg'} width={100} height={100} alt={`avater`} />
            <h2 className='text-[20px] font-bold text-center'>Emma watson</h2>
            <div className='text-xs text-white py-1 px-4 rounded-xl bg-red-600 my-1'>Overdue</div>
            <div className='text-xs text-white py-1 px-4 rounded-xl bg-yellow-500 my-1'>Overdue</div>
            <p className='text-center text-base text-gray-400 '>
                Former colleague, great mentor
            </p>
            <p className='text-center text-base text-gray-400 '>
                Former colleague, great mentor
            </p>
            <button className="btn btn-wide my-1"><Image src={iconBell} width={20} height={20} alt='icon bell' /> Snooze 2 weeks</button>
            <button className="btn btn-wide my-1"><Image src={archiveIcon} width={20} height={20} alt='icon bell' /> Archive</button>
            <button className="btn btn-wide my-1 text-red-500"><Image src={trashIcon} width={20} height={20} alt='icon bell' /> Trash</button>

        </div>
    );
};

export default FriendDetailsLeft;
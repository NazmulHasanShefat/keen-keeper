import Image from 'next/image';
import React, { use } from 'react';
import iconBell from "../../../assets/icons/BellSimpleZ.png";
import archiveIcon from "../../../assets/Archive.png";
import trashIcon from "../../../assets/Trash.png";
import { redirect } from 'next/navigation';

const FriendDetailsLeft = ({ friendDetailPromise, slug }) => {
    const friendDetail = use(friendDetailPromise);
    const CurrentFriend = friendDetail.find((friend)=> friend.id === Number(slug));
    if(CurrentFriend){
        return (
            <div className='flex flex-col items-center px-5'>
                <Image src={CurrentFriend.picture} width={100} height={100} alt={`avater`} />
                <h2 className='text-[20px] font-bold text-center'>{ CurrentFriend.name}</h2>
                <div className={`text-xs text-white py-1 px-4 rounded-xl my-1 ${CurrentFriend.status === "on-track" ? "bg-green-600": CurrentFriend.status === "almost due" ? "bg-yellow-500": CurrentFriend.status === "overdue" ? "bg-red-500" : ""}`}> {CurrentFriend.status} </div>
                <div className='flex justify-center items-center gap-3 flex-wrap'>
                    {CurrentFriend.tags.map((tag, index)=> <div key={index} className='text-xs py-1 px-4 rounded-xl font-light text-gray-900 bg-green-300 my-1'> {tag} </div> )}
                    
                </div>
                <p className='text-center text-base text-gray-400 my-2'>
                   {CurrentFriend.bio}
                </p>
                <button className="btn btn-wide my-1"><Image src={iconBell} width={20} height={20} alt='icon bell' /> Snooze 2 weeks</button>
                <button className="btn btn-wide my-1"><Image src={archiveIcon} width={20} height={20} alt='icon bell' /> Archive</button>
                <button className="btn btn-wide my-1 text-red-500"><Image src={trashIcon} width={20} height={20} alt='icon bell' /> Trash</button>
            </div>
        );
    }else{
        return redirect("/notfound");
    }
};

export default FriendDetailsLeft;
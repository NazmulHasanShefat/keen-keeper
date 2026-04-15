"use client";
import { FriendsContext } from "@/context/allContext";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";

const RecentList = () => {
  const { friendsConnectionStatus } = useContext(FriendsContext);
  return !friendsConnectionStatus || friendsConnectionStatus.length === 0 ? (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold my-2 text-center">No recent activity exist</h1>
      </div>
    </>
  ) : (
    <>
    {   
    friendsConnectionStatus.slice(0, 3).map((list, index) => {
      return (
        <li
          key={index}
          className="list-row grid grid-cols-12 border border-gray-200 my-2 px-0 lg:px-5 md:px-5"
        >
          <div className="flex items-center gap-3 lg:col-span-10 md:col-span-10 col-span-8">
            {list.communicationType === "Call" ? (
              <PhoneCall size={30} />
            ) : list.communicationType === "Message" ? (
              <MessageSquareMore size={30} />
            ) : (
              <Video size={30} />
            )}

            <div>
              <div className="lg:text-base md:text-base text-xs text-gray-400">
                <span className="font-bold text-gray-700">
                  {" "}
                  {list.communicationType}{" "}
                </span>{" "}
                with <span> {list.personName} </span>
              </div>
              <div className="text-xs uppercase font-normal text-gray-400">
                {list.communication_date}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center lg:col-span-2 md:col-span-2 col-span-4 text-xs lg:text-base md:text-base">
            <p className="text-gray-400 cursor-pointer"> <CiMenuKebab /> </p>
          </div>
        </li>
      );
    }) 
    }
    {friendsConnectionStatus.length >= 3 ? 
       <div className="flex flex-col mt-3 items-center">
        <Link href={"/timeline"}  
          className="py-2 rounded-xl hover:scale-105 transition-[scale] duration-200 cursor-pointer px-4 bg-green-700 text-white text-base"
        >
          See more
        </Link>
       </div> :
        
        "" 
        }
    </>
  );
};

export default RecentList;

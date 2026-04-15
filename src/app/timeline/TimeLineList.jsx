"use client";
import { FriendsContext } from "@/context/allContext";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const TimeLineList = ({ selectedValue }) => {
  const { friendsConnectionStatus } = useContext(FriendsContext);
  const filterdList = friendsConnectionStatus.filter((list)=> list.communicationType === selectedValue);
  // const Oldest = friendsConnectionStatus.filter((list)=>list.id)
  const showFilterdData = ()=>{
    if(selectedValue === "All"){
      return friendsConnectionStatus
    }else if(selectedValue === "Oldest"){
       const newval = friendsConnectionStatus.filter((list)=>{
        list.communicationTime > list.communicationTime;
       })
       console.log(newval);;
       return filterdList;
       
    }else{
      return filterdList;
    }
  }
  const ConnectionList = showFilterdData();
  console.log(ConnectionList)


  return ConnectionList.length === 0 || !ConnectionList ? (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] md:text-[48px] lg:text-[48px] font-bold text-center">404 Not found</h1>
        <p className="text-[18px] text-gray-500 my-2 text-center">Please communicate with your friends</p>
        <Link
          href={"/"}
          className="py-2 rounded-xl hover:scale-105 transition-[scale] duration-200 cursor-pointer px-4 bg-green-700 text-white text-base"
        >
          Go to Home page
        </Link>
      </div>
    </>
  ) : (
    ConnectionList.map((connectionTimeline, index) => {
      return (
        <li
          key={index}
          className="list-row grid grid-cols-12 border border-gray-200 my-2"
        >
          <div className="flex items-center gap-3 col-span-8 lg:col-span-10 md:col-span-10">
            {connectionTimeline.communicationType === "Call" ?
            <PhoneCall size={30}/>:
            connectionTimeline.communicationType === "Message" ?
            <MessageSquareMore size={30} />
            : 
            <Video size={30} />
             }
          
            <div>
              <div className="text-base text-gray-400">
                <span className="font-bold text-gray-700"> {connectionTimeline.communicationType} </span> with{" "}
                <span> { connectionTimeline.personName} </span>
              </div>
              <div className="text-xs uppercase font-normal text-gray-400">
                { connectionTimeline.communication_date}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center col-span-4 lg:col-span-2 md:col-span-2">
            <p className="text-gray-400"> {connectionTimeline.communicationTime} </p>
          </div>
        </li>
      );
    })
  );
};

export default TimeLineList;

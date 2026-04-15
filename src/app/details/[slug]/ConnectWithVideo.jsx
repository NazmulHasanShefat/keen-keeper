"use client";
import { FriendsContext } from "@/context/allContext";
import { Video } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ConnectWithVideo = ({ CurrentFriend }) => {
  const { friendsConnectionStatus, setFriendsConnectionStatus } =
    useContext(FriendsContext);
  const handleUpdateConnectionStatus = () => {
    const currentNewTime = new Date();
    const hour = currentNewTime.getHours();
    const min = currentNewTime.getMinutes();
    const sec = currentNewTime.getSeconds();
    const year = currentNewTime.getFullYear();
    const month = currentNewTime.getMonth();
    const date = currentNewTime.getDate();

    const communicationTime = `${hour < 10 ? "0"+ hour % 12 || 12 : hour % 12 || 12 }:${min < 10 ? "0"+min : min}:${sec < 10 ? "0" + sec : sec }`;
    const current_date = `${year}-${month < 10 ? "0" + (month + 1): month + 1 }-${date < 10 ? "0" + date : date} ${communicationTime}`;
    
    const newStatus = [
      ...friendsConnectionStatus,
      {
        communication_date: current_date,
        communicationType: "Video",
        personName: CurrentFriend.name,
      },
    ];
    setFriendsConnectionStatus(newStatus);
    toast.success(`Video with ${CurrentFriend.name}`);
  };

  return (
    <div
      onClick={handleUpdateConnectionStatus}
      className="card cursor-pointer h-max card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200"
    >
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-center font-bold text-[30px]">
          <Video />
        </h2>
        <p className="text-[18px] text-gray-600">Video</p>
      </div>
    </div>
  );
};

export default ConnectWithVideo;

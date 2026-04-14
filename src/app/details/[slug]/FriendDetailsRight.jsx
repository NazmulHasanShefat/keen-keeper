import {
  History,
  Image,
  MessageSquareMore,
  PhoneCall,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const FriendDetailsRight = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-20">
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">23</h2>
            <p className="text-[18px] text-gray-400">Days Since Contact</p>
          </div>
        </div>
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">23</h2>
            <p className="text-[18px] text-gray-400">Days Since Contact</p>
          </div>
        </div>
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">23</h2>
            <p className="text-[18px] text-gray-400">Days Since Contact</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 mb-1">
        <p className="text-md font-semibold">Relationship Goal</p>
        <Link
          href={"#"}
          className="text-md font-normal text-gray-400 hover:underline cursor-pointer"
        >
          Edit
        </Link>
      </div>
      <p>
        Connect every <span className="font-bold">30 days </span>
      </p>
      <p className="text-[20px] font-semibold mt-10">Quick Check-In</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-20 mt-3">
        <div className="card cursor-pointer h-max card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">
              <PhoneCall />
            </h2>
            <p className="text-[18px] text-gray-600">Call</p>
          </div>
        </div>
        <div className="card cursor-pointer h-max card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">
              <MessageSquareMore />
            </h2>
            <p className="text-[18px] text-gray-600">Text</p>
          </div>
        </div>
        <div className="card cursor-pointer h-max card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">
              <Video />
            </h2>
            <p className="text-[18px] text-gray-600">Video</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <p>Recent Interactions</p>
        <p className="flex justify-center items-center gap-2">
          <span>
            <History />
          </span>{" "}
          Full History
        </p>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md mt-5">

        <li className="list-row grid grid-cols-12 border-1 border-gray-200">
          <div className="flex items-center gap-3 col-span-10">
              <MessageSquareMore size={50}/>
            <div>
              <div className="font-bold text-[18px]">Text</div>
              <div className="text-xs uppercase font-normal text-gray-400">
                Remaining Reason asfdfasdfsasadfsadfsda sadfsadfsdf asdfsadfsdafsdafsadfsadfsadfsadfsadfsadfsadfdsafadfsad sadf as asdf sadf sa fsef
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center col-span-2">
            <p className="text-gray-400">Jan 28, 2026</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FriendDetailsRight;

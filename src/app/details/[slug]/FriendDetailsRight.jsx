import { History, MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Link from "next/link";
import React, { use } from "react";
import { GetDate, GetFullYear, GetMonth } from "../../../components/UI/DateComponents";
import ConnectWithPhone from "./ConnectWithPhone";
import ConnectWithMessage from "./ConnectWithMessage";
import ConnectWithVideo from "./ConnectWithVideo";

const FriendDetailsRight = ({ friendDetailPromise, slug }) => {
  const friendDetail = use(friendDetailPromise);
  const CurrentFriend = friendDetail.find(
    (friend) => friend.id === Number(slug),
  );
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10">
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]"> {CurrentFriend.days_since_contact} </h2>
            <p className="text-[18px] text-gray-400">Days Since Contact</p>
          </div>
        </div>
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]"> {CurrentFriend.goal} </h2>
            <p className="text-[18px] text-gray-400">Goal (Days)</p>
          </div>
        </div>
        <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]"><GetMonth current_date={CurrentFriend.next_due_date}/> <GetDate current_date={CurrentFriend.next_due_date}/>, <GetFullYear current_date={CurrentFriend.next_due_date} /> </h2>
            <p className="text-[18px] text-gray-400">Next Due</p>
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 mt-3">
        <ConnectWithPhone CurrentFriend={CurrentFriend}/>
        <ConnectWithMessage CurrentFriend={CurrentFriend}/>
        <ConnectWithVideo CurrentFriend={CurrentFriend}/>
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
            <MessageSquareMore size={50} />
            <div>
              <div className="font-bold text-[18px]">Text</div>
              <div className="text-xs uppercase font-normal text-gray-400">
                Remaining Reason asfdfasdfsasadfsadfsda sadfsadfsdf
                asdfsadfsdafsdafsadfsadfsadfsadfsadfsadfsadfdsafadfsad sadf as
                asdf sadf sa fsef
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

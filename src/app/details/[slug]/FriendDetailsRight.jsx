import { History, MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Link from "next/link";
import React, { use } from "react";
import {
  GetDate,
  GetFullYear,
  GetMonth,
} from "../../../components/UI/DateComponents";
import ConnectWithPhone from "./ConnectWithPhone";
import ConnectWithMessage from "./ConnectWithMessage";
import ConnectWithVideo from "./ConnectWithVideo";
import RecentList from "./RecentList";
import { redirect } from "next/navigation";

const FriendDetailsRight = ({ friendDetailPromise, slug }) => {
  const friendDetail = use(friendDetailPromise);
  const CurrentFriend = friendDetail.find(
    (friend) => friend.id === Number(slug),
  );
  if(CurrentFriend){
    return (
      <div className="px-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10">
          <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-center font-bold text-[30px]">
                {" "}
                {CurrentFriend.days_since_contact}{" "}
              </h2>
              <p className="text-[18px] text-gray-400">Days Since Contact</p>
            </div>
          </div>
          <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-center font-bold text-[30px]">
                {" "}
                {CurrentFriend.goal}{" "}
              </h2>
              <p className="text-[18px] text-gray-400">Goal (Days)</p>
            </div>
          </div>
          <div className="card card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-center font-bold text-[30px]">
                <GetMonth current_date={CurrentFriend.next_due_date} />{" "}
                <GetDate current_date={CurrentFriend.next_due_date} />,{" "}
                <GetFullYear current_date={CurrentFriend.next_due_date} />{" "}
              </h2>
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
          <ConnectWithPhone CurrentFriend={CurrentFriend} />
          <ConnectWithMessage CurrentFriend={CurrentFriend} />
          <ConnectWithVideo CurrentFriend={CurrentFriend} />
        </div>
  
        <div className="flex justify-between items-center mt-10 text-sm md:text-base lg:text-base">
          <p>Recent Interactions</p>
          <p className="flex justify-center items-center gap-2 text-sm md:text-base lg:text-base">
            <span>
              <History size={20}/>
            </span>{" "}
            Full History
          </p>
        </div>
  
        <ul className="list bg-base-100 rounded-box shadow-md mt-5 pb-5 px-5">
          <RecentList />
        </ul>
      </div>
    );
  }else{
    return redirect("/notfound");
  }
};

export default FriendDetailsRight;

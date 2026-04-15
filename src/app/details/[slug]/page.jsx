import React from "react";
import FriendDetailsLeft from "./FriendDetailsLeft";
import FriendDetailsRight from "./FriendDetailsRight";

const fetchCurrentfriend = async () => {
  try {
    const res = await fetch(
      `https://keen-keeper-pi.vercel.app/friends-data.json`,
      { cache: "no-store" },
    );
    const resData = res.json();
    return resData;

  } catch (error) {
    console.log("faild to fetch current friend Error:", error);
  }
};

const FriendDetails = async ({ params }) => {
  
  const { slug } = await params;
  const friendDetailPromise = fetchCurrentfriend();

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 w-full my-10 max-w-[1280.1px] gap-10 mx-auto">
      <div className="lg:col-span-1">
        <FriendDetailsLeft
          friendDetailPromise={friendDetailPromise}
          slug={slug}
        />
      </div>
      <div className="lg:col-span-3">
        <FriendDetailsRight
          friendDetailPromise={friendDetailPromise}
          slug={slug}
        />
      </div>
    </div>
  );
};

export default FriendDetails;

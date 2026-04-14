import Image from "next/image";
import React, { Suspense } from "react";
import FriendsCardsAll from "./FriendsCardsAll";
import LodingElement from "@/components/lodingComponent/LodingElement";

const FriendsAll = ({ className }) => {
  const friends_data_promise = fetch(
    `https://keen-keeper-pi.vercel.app/friends-data.json`,
    { cache: "no-store" },
  ).then((res) => res.json());
  return (
    <div className={`all_friends mx-auto px-5 lg:px-0 w-full ${className}`}>
      <h1 className="w-full text-5xl block font-bold">Friends all</h1>
      <Suspense fallback={<LodingElement />}>
        <div className="grid lg:grid-cols-4 mb-20 md:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
          <FriendsCardsAll friends_data_promise={friends_data_promise} />
        </div>
      </Suspense>
    </div>
  );
};

export default FriendsAll;

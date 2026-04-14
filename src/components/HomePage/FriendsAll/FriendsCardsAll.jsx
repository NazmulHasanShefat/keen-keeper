import React, { use } from "react";
import FriendCard from "./FriendCard";

const FriendsCardsAll = ({ friends_data_promise }) => {
  const myfriends = use(friends_data_promise);
  
  return myfriends || myfriends.length !== 0 ? (
    myfriends.map((friend, index) => <FriendCard friend={friend} key={index} />)
  ) : (
    <div className="flex flex-col items-center mt-10">
      <h1>404 Friends data Not found</h1>
      <p className="text-gray-400">please try again leter</p>
    </div>
  );
};

export default FriendsCardsAll;

import React, { use } from 'react';
import FriendCard from './FriendCard';

const FriendsCardsAll = ({ friends_data_promise }) => {
   const myfriends = use(friends_data_promise);
   console.log(myfriends);
    return (
       myfriends.map((friend, index)=> <FriendCard friend={friend} key={index} />)
    );
};

export default FriendsCardsAll;
"use client"
import { createContext, useState } from "react";

export const FriendsContext = createContext();

export default function FriendContextProvider({ children }){
    const [friendsConnectionStatus, setFriendsConnectionStatus] = useState();
    
    const data = {
     
        friendsConnectionStatus,
        setFriendsConnectionStatus,
    }
    return(
        <FriendsContext.Provider value={data}>
            { children }
        </FriendsContext.Provider>
    )
}
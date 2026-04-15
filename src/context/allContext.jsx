"use client"
import { createContext, useState } from "react";

export const FriendsContext = createContext();

export default function FriendContextProvider({ children }){
    const [friendsConnectionStatus, setFriendsConnectionStatus] = useState([]);
    const [menuIsOpen, setMenuOpen] = useState(false);
    const data = {
        friendsConnectionStatus,
        setFriendsConnectionStatus,
        menuIsOpen,
        setMenuOpen
    }
    return(
        <FriendsContext.Provider value={data}>
            { children }
        </FriendsContext.Provider>
    )
}
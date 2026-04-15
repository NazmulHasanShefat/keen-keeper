"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

export default function FriendContextProvider({ children }) {
  const [friendsConnectionStatus, setFriendsConnectionStatus] = useState([
    {
      communicationTime: "10:18:43", // HH:MM:SS
      communicationType: "Call",
      communication_date: "2026-04-15", // ISO format (YYYY-MM-DD)
      personName: "wanda",
    },
    {
      communicationTime: "02:45:10",
      communicationType: "Call",
      communication_date: "2026-04-14",
      personName: "tony",
    },
    {
      communicationTime: "00:30:55",
      communicationType: "Call",
      communication_date: "2026-04-13",
      personName: "steve",
    },
  ]);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const data = {
    friendsConnectionStatus,
    setFriendsConnectionStatus,
    menuIsOpen,
    setMenuOpen,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
}

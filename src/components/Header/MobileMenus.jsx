"use client";
import React, { useContext, useEffect } from "react";
import MyLink from "./MyLink";
import { ChartLine, Clock, House } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FriendsContext } from "@/context/allContext";

const MobileMenus = () => {
  const { menuIsOpen, setMenuOpen } = useContext(FriendsContext);

  const closeMenu = () => {
    setMenuOpen(!menuIsOpen);
  };

  if (menuIsOpen) {
    return (
      <>
        <div className="absolute h-screen inset-0 bg-black/30 z-10" onClick={closeMenu}></div>
        <div
          className={`w-1/2 bg-white fixed left-0 top-0 h-screen z-20 ${menuIsOpen ? "translate-x-0" : "translate-x-100"} transition-[translate] duration-200`}
        >
          <div className="flex justify-end items-start p-3 cursor-pointer">
            <IoCloseCircleOutline size={40} onClick={closeMenu} />
          </div>
          <div className="flex-col justify-center items-center gap-2 pt-10 px-2">
            <MyLink
              onclickfn={closeMenu}
              href={"/"}
              className={`flex items-center py-2 rounded-xl px-4 gap-2`}
            >
              {" "}
              <House /> Home
            </MyLink>
            <MyLink
            onclickfn={closeMenu}
              href={"/timeline"}
              className={`flex items-center py-2 rounded-xl px-4 gap-2`}
            >
              {" "}
              <Clock />
              Timeline
            </MyLink>
            <MyLink
              onclickfn={closeMenu}
              href={"/stats"}
              className={`flex items-center py-2 rounded-xl px-4 gap-2`}
            >
              <ChartLine /> Stats
            </MyLink>
          </div>
        </div>
      </>
    );
  } else {
    return;
  }
};

export default MobileMenus;

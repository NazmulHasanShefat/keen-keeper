"use client"
import { FriendsContext } from "@/context/allContext";
import { useContext } from "react";
import { MdMenuOpen } from "react-icons/md";

const MenuTogglerIcon = () => {
    const { menuIsOpen, setMenuOpen} = useContext(FriendsContext);
    const handleMenuOpen = ()=>{
        setMenuOpen(!menuIsOpen);
    }
    return (
       <MdMenuOpen size={30} onClick={handleMenuOpen}/>
    );
};

export default MenuTogglerIcon;
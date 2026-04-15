import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer mt-30 footer-horizontal footer-center bg-green-900 text-white rounded p-10">
      <nav className="flex justify-center items-center">
        <h1 className="lg:text-[60px] md:text-[60px] text-[40px] font-bold ">Keenkeeper</h1>
      </nav>
      <nav>
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
         <h2 className="text-[20px] font-bold mt-5 mb-2">Social Links</h2>
        <div className="grid grid-flow-col gap-4">
          <a className="bg-white p-2 rounded-full cursor-pointer hover:scale-95 transition-[scale] duration-200">
           <PiInstagramLogoFill color="black" size={20} />
          </a>
          <a className="bg-white p-2 rounded-full cursor-pointer hover:scale-95 transition-[scale] duration-200">
           <FaFacebook color="black" size={20} />
          </a>
          <a className="bg-white p-2 rounded-full cursor-pointer hover:scale-95 transition-[scale] duration-200">
           <FaXTwitter color="black" size={20} />
          </a>
    
        </div>
      </nav>
      <div className="block lg:flex md:flex justify-between w-full items-center">
        <p className="text-base">© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <div className="links flex flex-col md:flex-row lg:flex-row mt-5 md:mt-0 lg:mt-0 justify-center items-center gap-4">
          <div>
          <Link href={"/"} className="cursor-pointer hover:underline text-base">Privacy Policy  </Link>
          </div>
          <div>
          <Link href={"/"} className="cursor-pointer hover:underline text-base">Terms of Service </Link>
          </div>
          <div>
          <Link href={"/"} className="cursor-pointer hover:underline text-base"> Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

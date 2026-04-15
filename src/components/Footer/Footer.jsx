import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer mt-30 footer-horizontal footer-center bg-green-900 text-white text-base-content rounded p-10">
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
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center justify-between p-4">
  <aside className="grid-flow-col items-center">
    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a className="cursor-pointer hover:underline">
     Privacy Policy
    </a>
    <a className="cursor-pointer hover:underline">
     Terms of Service
    </a>
    <a className="cursor-pointer hover:underline">
     Cookies
    </a>
  </nav>
</footer>
    </footer>
  );
};

export default Footer;

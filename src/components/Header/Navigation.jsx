import { ChartLine, Clock, House } from "lucide-react";
import MyLink from "./MyLink";
import { MdMenuOpen } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="navbar flex items-center bg-base-100 shadow-sm px-5">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl px-0 hover:bg-white border-transparent">KeenKeeper</a>
      </div>
      <div className="hidden lg:flex md:flex justify-center items-center gap-2">
        <MyLink href={"/"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}> <House /> Home</MyLink>
        <MyLink href={"/timeline"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}> <Clock />Timeline</MyLink>
        <MyLink href={"/stats"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}><ChartLine /> Stats</MyLink>
      </div>

      <div className="lg:hidden md:hidden justify-end items-center">
        <MdMenuOpen size={30}/>
      </div>
    </nav>
  );
};

export default Navigation;

import { ChartLine, Clock, House } from "lucide-react";
import MyLink from "./MyLink";
import MenuTogglerIcon from "./MenuTogglerIcon";
import MobileMenus from "./MobileMenus";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar flex items-center bg-base-100 shadow-sm px-5">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl px-0 hover:bg-white border-transparent">KeenKeeper</Link>
      </div>
      <div className="hidden lg:flex md:flex justify-center items-center gap-2">
        <MyLink href={"/"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}> <House /> Home</MyLink>
        <MyLink href={"/timeline"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}> <Clock />Timeline</MyLink>
        <MyLink href={"/stats"} className={`flex items-center py-2 rounded-xl px-4 gap-2`}><ChartLine /> Stats</MyLink>
      </div>

      <div className="lg:hidden md:hidden justify-end items-center">
        <MenuTogglerIcon />
      </div>
      <MobileMenus />
    </nav>
  );
};

export default Navigation;

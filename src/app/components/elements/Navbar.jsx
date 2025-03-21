import {React} from "react";
import { inter } from "@/app/fonts";
import NavbarAccount from "./NavbarAccount";
import Link from "next/link";

const Navbar = () => {
      
  return (
    <div className="w-full h-16 border-b">
      <div className="max-w-[1280px] h-full flex justify-between items-center mx-auto">
        <Link href={"/"} className="ms-20">
          <h1 className={`${inter.className} text-3xl font-extrabold `}>
            Opaku
          </h1>
        </Link>

        <NavbarAccount />
      </div>
    </div>
  );
};

export default Navbar;

import {React} from "react";
import { inter } from "@/app/fonts";
import NavbarAccount from "./NavbarAccount";

const Navbar = () => {
      
  return (
    <div className="w-full h-16 border-b">
      <div className="max-w-[1280px] h-full flex justify-between items-center mx-auto">
        <h1 className={`${inter.className} text-3xl font-extrabold ms-20`}>
          Opaku
        </h1>
        <NavbarAccount />
      </div>
    </div>
  );
};

export default Navbar;

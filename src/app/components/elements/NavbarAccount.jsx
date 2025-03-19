"use client";
import { React, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

const NavbarAccount = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <div className="flex items-center justify-between me-20">
          <MdOutlineShoppingCart className="text-lg"/>
          <div className="flex items-center border-l border-black ps-2 h-fit ms-4">
            <p className="text-lg">Hi, Naufal</p>
            <FaChevronDown className="text-sm ms-2 text-slate-500"/>
          </div>
        </div>
      ) : (
        <Link href={"/"}>
          <p className="me-20 text-lg ">
            <span className="text-[#6687F3]">Login</span> First to Checkout
          </p>
        </Link>
      )}
    </>
  );
};

export default NavbarAccount;

"use client";
import { React, use, useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import Cart from "@/app/context/CartState";

const NavbarAccount = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [getUsername, setGetUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { cartlist, setCartList, notif } = useContext(Cart);

  const logouthandler = () => {
    localStorage.removeItem("username");
    setIsLogin(false);
    setCartList([]);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLogin(true);
      setGetUsername(username);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <div className="flex items-center justify-between me-20">
          <Link href={"/checkout"} className="relative">
            <MdOutlineShoppingCart className="text-xl" />

            {notif > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white transform translate-x-1/2 -translate-y-1/2">
                {notif}
              </span>
            )}
          </Link>
          <div className="flex items-center border-l border-black ps-2 h-fit ms-4 relative">
            <p className="text-lg">Hi, {getUsername}</p>
            <FaChevronDown
              className="text-sm ms-2 text-slate-500 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={`absolute bottom-0 right-0 transform translate-y-full w-full h-full bg-[#f9f9f9] border border-black rounded-lg cursor-pointer ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={logouthandler}
            >
              <p className="text-center">Logout</p>
            </div>
          </div>
        </div>
      ) : (
        <Link href={"/login"} className="me-20">
          <p className="text-lg ">
            <span className="text-[#6687F3]">Login</span> First to Checkout
          </p>
        </Link>
      )}
    </>
  );
};

export default NavbarAccount;

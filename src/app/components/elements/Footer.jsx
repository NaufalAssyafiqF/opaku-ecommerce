import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { inter } from "@/app/fonts";

const Footer = () => {
  return (
    <div className="w-full border-t border-black">
      <div className="max-w-[1280px] mx-auto flex justify-between py-10 px-20">
        <div className="">
          <h1 className={`${inter.className} text-3xl font-extrabold`}>
            Opaku
          </h1>
          <p className="mt-2">Discover your best look with Opaku</p>
          <div className="flex space-x-4 mt-6">
            <FaInstagram className="text-2xl"/>
            <AiOutlineFacebook className="text-2xl"/>
            <FaXTwitter className="text-2xl"/>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <ul className="flex flex-col space-y-2 mt-4">
            <li className="flex items-center space-x-4">
              <CgMail />
              <p>opakustore@gmail.com</p>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhone />
              <p>+62 123 456 789</p>
            </li>
            <li className="flex items-center space-x-4">
              <FaMapMarkerAlt />
              <p>Singapore, Indonesia, Vietnam</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

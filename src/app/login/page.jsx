import Image from "next/image";
import React from "react";
import { inter } from "@/app/fonts";
import heroImg from "@/app/assets/images/clothes.jpeg";
import LoginForm from "../components/LoginPageComponents/LoginForm";

const page = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[60%] h-full bg-amber-300 relative">
        <Image
          src={heroImg}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
      <div className="w-[40%] h-full flex flex-col justify-between py-10 lg:px-10 xl:px-20">
        <div>
          <h1 className={`${inter.className} text-3xl font-extrabold`}>
            Opaku
          </h1>
          <p className="mt-2">Discover your best look with Opaku</p>
        </div>
        <LoginForm />
        <div></div>
      </div>
    </div>
  );
};

export default page;

import Image from 'next/image';
import React from 'react'
import heroImg from "@/app/assets/images/clothes.jpeg";

const HeroImage = () => {
  return (
    <div className="mx-20 pt-10">
      <div className="w-full aspect-[8/4] rounded-xl overflow-hidden relative">
        <Image
          src={heroImg}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <p className="absolute w-[70%]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold text-white text-4xl text-center">
          Discover Your Best Look <br /> with Opaku
        </p>
      </div>
    </div>
  );
}

export default HeroImage
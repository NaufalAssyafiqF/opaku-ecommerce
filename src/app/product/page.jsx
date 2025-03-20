import React from "react";
import Footer from "../components/elements/Footer";
import Navbar from "../components/elements/Navbar";
import Image from "next/image";
import productImg from "@/app/assets/images/bag.jpg";
import { FaStar } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto mb-20 px-20">
        <p className="text-xl font-semibold mt-10">Product Detail</p>
        <hr className="w-full border-1" />
        <div className="flex mt-10 gap-x-10">
          <div className="w-[40%]">
            <div className="bg-[#d9d9d9] p-10 rounded-xl">
              <Image
                src={productImg}
                width={1000}
                height={1000}
                alt="product image"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="w-[60%] flex flex-col justify-between">
            <div>
              <h1 className="text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-2 xl:mb-4">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </h1>
              <p className="text-lg lg:text-lg xl:text-xl mb-2 lg:mb-2 xl:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate ullam amet molestiae a temporibus vel quam enim est
                accusantium vitae. Eveniet ipsam qui fugiat asperiores hic.
                Accusamus fuga quis laudantium!
              </p>
              <div className="flex mb-2 lg:mb-2 xl:mb-4 gap-x-5">
                <div className="flex text-amber-300 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-xl">4.9</p>
                <p className="text-xl">25 Reviews</p>
              </div>
              <p className="text-2xl lg:text-2xl xl:text-3xl font-bold">
                $ 410
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between w-2/3 bg-[#d9d9d9] px-4 py-3 rounded-lg">
                <button>
                  <TiMinus className="cursor-pointer" />
                </button>
                <p>1</p>
                <button>
                  <FaPlus className="cursor-pointer" />
                </button>
              </div>
              <button className="flex items-center justify-center w-2/3 bg-[#6687F3] hover:bg-[#6687f3e2] px-4 py-3 rounded-lg text-white mt-4 cursor-pointer">
                Add to chart
                <MdOutlineShoppingCart className="ms-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import productImg from "@/app/assets/images/bag.jpg";
import { GoPlusCircle } from "react-icons/go";
import Link from "next/link";

const CardProduct = () => {
  return (
    <Link href={"/product"}>
      <div className="w-full aspect-[3/5]">
        <div className="bg-[#d9d9d9] p-5 rounded-xl">
          <Image
            src={productImg}
            width={1000}
            height={1000}
            alt="product img"
            className="rounded-xl"
          />
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">Name Product</p>
            <GoPlusCircle className="text-xl" />
          </div>
          <p className="text-lg font-bold">$ 109.95</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;

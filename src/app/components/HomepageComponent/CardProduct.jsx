import React from "react";
import Image from "next/image";
import productImg from "@/app/assets/images/bag.jpg";
import { GoPlusCircle } from "react-icons/go";
import Link from "next/link";

const CardProduct = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="w-full aspect-[3/5]">
      <div className="bg-[#d9d9d9] p-5 rounded-xl w-full aspect-[3/4]">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt="product img"
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <p className="text-lg w-[80%] font-medium truncate whitespace-nowrap">
            {product.title}
          </p>
          <GoPlusCircle className="text-xl" />
        </div>
        <p className="text-lg font-bold">$ {product.price}</p>
      </div>
    </Link>
  );
};

export default CardProduct;

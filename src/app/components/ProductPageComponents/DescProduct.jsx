"use client";
import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Cart from "@/app/context/CartState";
import { sendGTMEvent } from "@next/third-parties/google";

const DescProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { setCartList, cartList, handleNotif } = useContext(Cart);

  console.log(cartList);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addtoChart = () => {
    setCartList((prevCart) => [...prevCart, { ...product, quantity }]);
    handleNotif();
    sendGTMEvent({
      event: "add_to_cart",
      value: {
        item_name: product.title,
        price: product.price,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="w-[60%] flex flex-col justify-between">
      <div>
        <h1 className="text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-2 xl:mb-4">
          {product.title}
        </h1>
        <p className="text-lg lg:text-lg xl:text-xl mb-2 lg:mb-2 xl:mb-4">
          {product.description}
        </p>
        <div className="flex mb-2 lg:mb-2 xl:mb-4 gap-x-5">
          <div className="flex text-amber-300 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-xl">{product.rating?.rate}</p>
          <p className="text-xl">{product.rating?.count} Reviews</p>
        </div>
        <p className="text-2xl lg:text-2xl xl:text-3xl font-bold">
          $ {product.price}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between w-2/3 bg-[#d9d9d9] px-4 py-3 rounded-lg">
          <button onClick={decrementQuantity}>
            <TiMinus className="cursor-pointer" />
          </button>
          <p>{quantity}</p>
          <button onClick={incrementQuantity}>
            <FaPlus className="cursor-pointer" />
          </button>
        </div>
        <button
          className="flex items-center justify-center w-2/3 bg-[#6687F3] hover:bg-[#6687f3e2] px-4 py-3 rounded-lg text-white mt-4 cursor-pointer"
          onClick={addtoChart}
        >
          Add to chart
          <MdOutlineShoppingCart className="ms-3" />
        </button>
      </div>
    </div>
  );
};

export default DescProduct;

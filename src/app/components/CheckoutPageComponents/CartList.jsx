import React from 'react'
import productImg from "@/app/assets/images/bag.jpg";
import Image from "next/image";

const CartList = () => {
  return (
    <div className="w-[70%]">
      <table>
        <thead className="mb-2">
          <tr className="border-b-2 border-slate-200">
            <th className="w-[70%] pb-1">Item</th>
            <th className="w-[10%] pb-1">Qty</th>
            <th className="w-[20%] pb-1">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b-2 border-slate-200  py-2">
            <td className="flex items-center space-x-4 py-2 pe-4">
              <Image
                src={productImg}
                width={100}
                height={100}
                alt="product image"
              />
              <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            </td>
            <td className="text-center">1</td>
            <td className="text-center">$ 410</td>
          </tr>
          <tr className="border-b-2 border-slate-200  py-2">
            <td className="flex items-center space-x-4 py-2 pe-4">
              <Image
                src={productImg}
                width={100}
                height={100}
                alt="product image"
              />
              <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            </td>
            <td className="text-center">1</td>
            <td className="text-center">$ 410</td>
          </tr>
          <tr className="border-b-2 border-slate-200  py-2">
            <td className="flex items-center space-x-4 py-2 pe-4">
              <Image
                src={productImg}
                width={100}
                height={100}
                alt="product image"
              />
              <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            </td>
            <td className="text-center">1</td>
            <td className="text-center">$ 410</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartList
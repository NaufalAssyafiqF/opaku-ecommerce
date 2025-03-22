"use client";
import React, { useContext } from 'react'
import Image from "next/image";
import Cart from '@/app/context/CartState';

const CartListComponent = () => {
  const { cartList } = useContext(Cart);

  return (
    <div className="w-[70%]">
      <table className='w-full'>
        <thead className="mb-2 w-full">
          <tr className="border-b-2 border-slate-200 w-full">
            <th className="w-[70%] pb-1">Item</th>
            <th className="w-[10%] pb-1">Qty</th>
            <th className="w-[20%] pb-1">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          {cartList && cartList.map((item) => (
            <tr className="border-b-2 border-slate-200  py-2">
              <td className="flex items-center space-x-4 py-2 pe-4">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="product image"
                  className='aspect-[4/5]'
                />
                <p>{item.title}</p>
              </td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">$ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartListComponent
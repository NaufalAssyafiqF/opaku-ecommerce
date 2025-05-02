"use client";
import { useContext, useMemo, useState } from "react";
import Cart from "@/app/context/CartState";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { sendGTMEvent } from "@next/third-parties/google";

const SummaryCheckout = () => {
  const { cartList, setCartList, setNotif } = useContext(Cart);
  const [summary, setSummary] = useState({});

  const checkoutHandler = () => {
    alert("checkout success");
    const itemCheckout = cartList.map((item) => ({
      id: item.id,
      item_name: item.title,
      quantity: item.quantity,
      price: item.price,
    }));
    const date = new Date();
    const transactionId = `TId_${date.getTime()}`;

    console.log(itemCheckout);

    const total_int = parseInt(summary.total);

    sendGTMEvent({
      event: "purchase",
      ecommerce: {
        username: localStorage.getItem("username"),
        user_id: localStorage.getItem("userId"),
        transaction_id: transactionId,
        value: total_int,
        tax: summary.tax,
        shipping: summary.shippingCost,
        currency: "USD",
        items: itemCheckout,
      },
    });

    setCartList([]);
    setNotif(0);
  };

  useMemo(() => {
    if (cartList.length > 0) {
      const subtotal = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const subtotalFormatted = subtotal.toFixed(2);
      const shippingCost = 20;
      const discount = 5;
      const tax = subtotal * 0.12;
      const taxFormatted = tax.toFixed(2);
      const total = subtotal + shippingCost - discount + tax;
      const totalFormatted = total.toFixed(2);
      setSummary({
        subtotal: subtotalFormatted,
        shippingCost,
        discount,
        tax: taxFormatted,
        total: totalFormatted,
      });
    } else {
      setSummary({
        subtotal: 0,
        shippingCost: 0,
        discount: 0,
        tax: 0,
        total: 0,
      });
    }
  }, [cartList]);

  return (
    <div className="w-[30%]">
      <div className="border rounded-lg p-4">
        <h1 className="text-2xl font-medium mb-2">Summary</h1>
        <hr className="w-full border-1 border-slate-200 mb-4" />
        <div className="text-lg font-medium flex flex-col gap-y-2 mb-4">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$ {summary.subtotal}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping Cost</p>
            <p>$ {summary.shippingCost}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Discount</p>
            <p> - $ {summary.discount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tax</p>
            <p>$ {summary.tax}</p>
          </div>
        </div>
        <hr className="w-full border-1 border-slate-200 mb-4" />
        <div className="text-lg font-medium flex justify-between">
          <p>Total</p>
          <p>$ {summary.total}</p>
        </div>
        <button
          className={`w-full text-lg font-medium text-white flex items-center justify-center gap-x-2 mt-4 px-4 py-2 bg-[#6687F3] hover:bg-[#6687f3e2] rounded-lg  smooth-animation ${
            cartList.length === 0
              ? "disabled cursor-not-allowed "
              : " cursor-pointer"
          }`}
          onClick={checkoutHandler}
        >
          Checkout <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default SummaryCheckout;

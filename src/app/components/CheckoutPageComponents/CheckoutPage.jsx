import React from "react";
import CartList from "./CartList";
import SummaryCheckout from "./SummaryCheckout";

const CheckoutPage = () => {
  return (
    <div className="w-full flex-grow">
      <div className="max-w-[1280px] flex-grow mx-auto mb-20 px-20">
        <p className="text-xl font-semibold mt-10">Shopping Cart</p>
        <hr className="w-full border-1" />
        <div className="flex mt-10 gap-x-10">
          <CartList />
          <SummaryCheckout />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const SummaryCheckout = () => {
  return (
    <div className="w-[30%]">
      <div className="border rounded-lg p-4">
        <h1 className="text-2xl font-medium mb-2">Summary</h1>
        <hr className="w-full border-1 border-slate-200 mb-4" />
        <div className="text-lg font-medium flex flex-col gap-y-2 mb-4">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$ 1230</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping Cost</p>
            <p>$ 20</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Discount</p>
            <p> - $ 50</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tax</p>
            <p>12%</p>
          </div>
        </div>
        <hr className="w-full border-1 border-slate-200 mb-4" />
        <div className="text-lg font-medium flex justify-between">
          <p>Total</p>
          <p>$ 1300</p>
        </div>
        <button className="w-full text-lg text-white font-medium flex items-center justify-center gap-x-2 mt-4 px-4 py-2 bg-[#6687F3] hover:bg-[#6687f3e2] rounded-lg cursor-pointer smooth-animation">
          Checkout <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default SummaryCheckout;

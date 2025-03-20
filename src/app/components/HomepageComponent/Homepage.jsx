import React from "react";
import Navbar from "../elements/Navbar";
import HeroImage from "./HeroImage";
import CardProduct from "./CardProduct";
import Footer from "../elements/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto mb-20">
        <HeroImage />
        <div className="mx-20 mt-20">
          <p className="text-xl font-semibold">All Shop</p>
          <hr className="w-full border-1" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-20 pt-10">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;

import React from "react";
import Navbar from "../elements/Navbar";
import HeroImage from "./HeroImage";
import Footer from "../elements/Footer";
import ProductList from "./ProductList";

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
        <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;

import React from "react";
import Navbar from "@/app/components/elements/Navbar";
import Footer from "@/app/components/elements/Footer";
import ProductPage from "@/app/components/ProductPageComponents/ProductPage";

const page = () => {
  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
};

export default page;

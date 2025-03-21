import React from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import CheckoutPage from "../components/CheckoutPageComponents/CheckoutPage";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CheckoutPage />
      <Footer />
    </div>
  );
};

export default page;

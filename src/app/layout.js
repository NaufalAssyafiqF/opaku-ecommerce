"use client";
import React, { useState } from "react";
import "./globals.css";
import { poppins } from "./fonts";
import Cart from "./context/CartState";

export default function RootLayout({ children }) {
  const [cartList, setCartList] = useState([]);

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Cart.Provider value={{ cartList, setCartList }}>{children}</Cart.Provider>
      </body>
    </html>
  );
}

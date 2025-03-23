"use client";
import React, { useState } from "react";
import "./globals.css";
import { poppins } from "./fonts";
import Cart from "./context/CartState";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  const [cartList, setCartList] = useState([]);
  const [notif, setNotif] = useState(0);

  const handleNotif = () => {
    setNotif(notif + 1);
  };

  return (
    <html lang="en" className={poppins.className}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
      <body>
        <Cart.Provider
          value={{ cartList, setCartList, handleNotif, notif, setNotif }}
        >
          {children}
        </Cart.Provider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </html>
  );
}

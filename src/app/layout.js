import React from "react";
import "./globals.css";
import { poppins } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}

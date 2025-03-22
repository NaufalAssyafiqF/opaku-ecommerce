"use client";
import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

const ProductList = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );
      const filterData = res.filter((product) =>
        product.category.includes("clothing")
      );
      setDataProducts(filterData);
    };

    getdata();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-20 pt-10">
      {dataProducts.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

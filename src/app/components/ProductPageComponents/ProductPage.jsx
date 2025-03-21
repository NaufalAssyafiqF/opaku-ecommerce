"use client";
import React, { useEffect, useState } from "react";
import DescProduct from "./DescProduct";
import Image from "next/image";
import { useParams } from "next/navigation";
import dummyImg from "@/app/assets/images/dummy-img.png";

const ProductPage = () => {
  const [getProduct, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      ).then((res) => res.json());

      setProduct(res);
    };

    getData();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto mb-20 px-20">
      <p className="text-xl font-semibold mt-10">Product Detail</p>
      <hr className="w-full border-1" />
      <div className="flex mt-10 gap-x-10">
        <div className="w-[40%]">
          <div className="bg-[#d9d9d9] p-10 rounded-xl">
            <Image
              src={getProduct?.image}
              width={300}
              height={300}
              alt="product image"
              className="rounded-xl object-cover w-full"
            />
          </div>
        </div>
        <DescProduct product={getProduct} />
      </div>
    </div>
  );
};

export default ProductPage;

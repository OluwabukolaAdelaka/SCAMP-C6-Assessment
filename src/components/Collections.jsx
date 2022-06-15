import React from "react";
import { BsCart3 } from "react-icons/bs";
import Product1 from "../assets/product1.jpg";

const Collections = () => {
  return (
    <div className="max-w-[1440px] h-screen mx-auto py-4 grid md:grid-cols-2 gap-8 px-4">
      <div className="">
        <img src={Product1} className="border rounded-xl" alt="product" />
      </div>
      <div className="pt-10">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand anything the
          weather can offer.
        </p>
        <div className="flex md:block">
          <div className="flex">
            <p className="pr-8">$125</p>
            <span>50%</span>
          </div>
          <p>$250</p>
        </div>
        <div className="flex md:block" ass>
          <div className="flex">
            <span>-</span>
            <p>0</p>
            <span>+</span>
          </div>
          <button className="flex">
            <BsCart3 />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;

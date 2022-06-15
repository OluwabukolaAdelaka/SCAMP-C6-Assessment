import React from "react";
import { BsCart3 } from "react-icons/bs";
import Product1 from "../assets/product1.jpg";

const Collections = () => {
  return (
    <div className="max-w-[1440px] h-screen mx-auto py-4 grid lg:grid-cols-2 gap-8 px-4">
      <div className="">
        <img src={Product1} className="border rounded-xl" alt="product" />
      </div>
      <div className="pt-[5%] xl:pt-[30%] px-3">
        <h4 className="text-primary-100 text-3xl pb-4">SNEAKER COMPANY</h4>
        <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:pb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-secondary-200 text-lg pb-4 lg:pb-9">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand anything the
          weather can offer.
        </p>
        <div className="flex md:block justify-between">
          <div className="flex">
            <p className="pr-8 text-secondary-100 font-bold text-2xl lg:text-4xl">
              $125.00
            </p>
            <span className="text-primary-100 font-bold text-xl pt-1 lg:pt-3">
              50%
            </span>
          </div>
          <p className="text-secondary-200 my-2 lg:my-6 line-through text-xl">
            $250.00
          </p>
        </div>
        <div className="block md:flex mt-6">
          <div className="w-full md:w-[40%] flex justify-between mr-12 pt-4 px-3">
            <span className="text-primary-100 text-3xl font-bold">-</span>
            <p className="text-xl font-bold">0</p>
            <span className="text-primary-100 text-3xl font-bold">+</span>
          </div>
          <button className="flex bg-primary-100 text-white justify-center text-center w-full md:w-[200px] mt-4 py-4 md:px-6 border rounded-lg">
            <BsCart3 size={20} className="mx-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;

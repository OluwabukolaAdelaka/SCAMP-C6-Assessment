import React from "react";
import { BsCart3 } from "react-icons/bs";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import productThumb1 from "../assets/image-product-1-thumbnail.jpg";
import productThumb2 from "../assets/image-product-2-thumbnail.jpg";
import productThumb3 from "../assets/image-product-3-thumbnail.jpg";
import productThumb4 from "../assets/image-product-4-thumbnail.jpg";
import LightGallery from "lightgallery/react";

const Collections = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="max-w-[1240px] h-screen mx-auto py-4 grid lg:grid-cols-2 gap-8 px-4">
      <div className="">
        <img
          src={Product1}
          className="border rounded-xl cursor-pointer"
          alt="product"
        />
        <div className="">
          <LightGallery onInit={onInit} speed={300}>
            <div className="md:flex pt-4">
              <a href={Product1} className="border rounded-xl">
                <img
                  src={productThumb1}
                  className="border rounded-xl opacity-50 cursor-pointer hover:opacity-100 hover:transition"
                  alt="Product 1"
                />
              </a>
              <a href={Product2} className="border rounded-xl">
                <img
                  src={productThumb2}
                  className="border rounded-xl opacity-50 cursor-pointer hover:opacity-100"
                  alt="Product 2"
                />
              </a>
              <a href={Product3} className="border rounded-xl">
                <img
                  src={productThumb3}
                  className="border rounded-xl opacity-50 cursor-pointer hover:opacity-100"
                  alt="Product 3"
                />
              </a>
              <a href={Product4} className="border rounded-xl">
                <img
                  src={productThumb4}
                  className="border rounded-xl opacity-50 cursor-pointer hover:opacity-100"
                  alt="Product 4"
                />
              </a>
            </div>
          </LightGallery>
        </div>
      </div>
      <div className="pt-[5%] xl:pt-[15%] px-3">
        <h4 className="text-primary-100 text-3xl pb-4">SNEAKER COMPANY</h4>
        <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:pb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-secondary-200 text-lg pb-2 lg:pb-6">
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
          <div className="bg-[#f8f9fa] w-full h-16 md:w-[30%] flex justify-between mr-12 px-3">
            <button className="text-primary-100 text-3xl font-bold cursor-pointer">
              -
            </button>
            <p className="text-xl font-bold pt-5">0</p>
            <button className="text-primary-100 text-3xl font-bold cursor-pointer">
              +
            </button>
          </div>
          <button className="flex bg-primary-100 text-white justify-center text-center w-full md:w-[300px] mt-4 py-4 md:px-6 border rounded-lg">
            <BsCart3 size={20} className="mx-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;

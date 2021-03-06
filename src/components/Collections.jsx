import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Images from "./Images";

const Collections = ({ count, onIncrement, onDecrement, onAdd }) => {
  // mobile caousel
  const slides = [
    { img: Product1 },
    { img: Product2 },
    { img: Product3 },
    { img: Product4 },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="max-w-[1240px] h-screen mx-auto py-8 grid lg:grid-cols-2 gap-8 px-4">
      <div className="">
        <div className="hidden md:flex">
          <img
            src={selectedImg}
            className="border rounded-xl cursor-pointer"
            alt="product"
          />
        </div>
        {/* desktop gallery with thumbnail */}
        <div className="hidden md:flex">
          {Images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={
                selectedImg === image
                  ? "border-4 border-primary-100 rounded-xl w-[25%] h-[25%] cursor-pointer object-contain mt-4 opacity-40"
                  : "border rounded-xl w-[25%] h-[25%] cursor-pointer object-contain mt-4"
              }
              alt="Product"
              onClick={() => setSelectedImg(image)}
            />
          ))}
        </div>
      </div>
      {/* mobile carousel */}
      <div className="flex justify-center items-center  md:hidden relative">
        <MdKeyboardArrowRight
          size={40}
          className="absolute border rounded-full bg-[#fff] top-[50%] right-[30px]"
          onClick={nextSlide}
        />
        <MdKeyboardArrowLeft
          size={40}
          className="absolute border rounded-full bg-[#fff] top-[50%] left-[30px]"
          onClick={prevSlide}
        />
        {slides.map((slide, index) => (
          <div key={index} className="">
            {index === current && <img src={slide.img} alt="product" />}
          </div>
        ))}
      </div>

      {/* Text Part */}
      <div className="pt-[5%] xl:pt-[15%] px-3 pb-9">
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
            <button
              disabled={count <= 0}
              onClick={onDecrement}
              className="text-primary-100 text-3xl font-bold cursor-pointer"
            >
              -
            </button>
            <p className="text-xl font-bold pt-5">{count}</p>
            <button
              onClick={onIncrement}
              className="text-primary-100 text-3xl font-bold cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            onClick={onAdd}
            className="flex bg-primary-100 hover:bg-primary-200 text-white justify-center text-center w-full md:w-[300px] mt-4 py-4 md:px-6 border rounded-lg"
          >
            <BsCart3 size={20} className="mx-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;

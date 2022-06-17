import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Product1 from "../assets/product1.jpg";
import Avatar from "../assets/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Navigation = ({ cart }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const viewCart = () => {
    cart === 0
      ? toast.warn("Your cart is empty, please select item(s)")
      : toast(
          <div className="px-2">
            <h3 className="text-xl font-bold pb-4">Cart</h3>
            <div className="flex">
              <img
                src={Product1}
                className="w-[50%] h-[50%] border rounded-xl"
                alt="product"
              />
              <div className="text-md font-bold text-secondary-100 pb-4 pl-2">
                <p className="pb-1 pt-2">Fall Limited Edition Sneakers</p>
                <p className="text-md text-secondary-200 pb-1">
                  $125.00 x {cart}
                </p>
                <small className="text-lg text-secondary-100 ">
                  ${cart * 125}
                </small>
              </div>
            </div>
            <button
              onClick={processingOrder}
              className="w-full border rounded-md bg-primary-100 hover:bg-primary-200 text-white justify-center text-center"
            >
              Checkout
            </button>
          </div>
        );
  };

  const processingOrder = () => {
    const resolveAfter2Sec = new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
    toast.promise(resolveAfter2Sec, {
      pending: "Processing your order",
      success: "Your order is processed 👌",
    });
  };

  return (
    <div className="max-w-[1240px] flex justify-between mx-auto bg-[#f8f9fa] h-20 px-6 items-center">
      <div className="flex">
        <div className="md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={40} className="pr-4 z-20" />
          ) : (
            <GiHamburgerMenu size={40} className="pr-4 z-20" />
          )}
        </div>
        <div>
          <img src={Logo} className="pt-2" alt="logo" />
        </div>
        {/* desktop */}
        <ul className="hidden md:flex text-lg ml-4 lg:ml-9 cursor-pointer text-[#2c2d2ea6]">
          <li className="px-[10px] lg:px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Collections
          </li>
          <li className="px-[10px] lg:px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Women
          </li>
          <li className="px-[10px] lg:px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Men
          </li>
          <li className="px-[10px] lg:px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            About
          </li>
          <li className="px-[10px] lg:px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Contact
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div
        className={
          nav
            ? "md:hidden w-[60%] bg-[#fff] h-screen z-20 top-20 left-0 absolute text-lg font-bold cursor-pointer"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Collections
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Women
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Men
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            About
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-primary-100">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex">
        <button onClick={viewCart} className="flex relative pt-3 mr-6 md:mr-8">
          <img
            src={Cart}
            className="w-[30px] cursor-pointer"
            alt="shopping cart"
          />

          <div className="absolute bg-primary-100 w-6 right-[-12px] bottom-[15px] text-white text-center rounded-full">
            {cart}
          </div>
        </button>

        <img
          src={Avatar}
          className="w-[40px] cursor-pointer hover:border-2 hover:rounded-[50%] hover:border-[#f1730c]"
          alt="user avatar"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navigation;

import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = ({ cart }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px] flex justify-between mx-auto bg-[#f8f9fa] h-20 px-6 items-center">
      <div className="flex">
        <div className="md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={40} className="pr-4" />
          ) : (
            <GiHamburgerMenu size={40} className="pr-4" />
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
            ? "md:hidden w-[60%] h-screen top-20 left-0 absolute text-lg font-bold cursor-pointer"
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
        <div className="flex relative pt-3 mr-6 md:mr-8">
          <img
            src={Cart}
            className="w-[30px] cursor-pointer"
            alt="shopping cart"
          />
          <div className="absolute bg-primary-100 w-6 right-[-12px] bottom-[15px] text-white text-center rounded-full">
            {cart}
          </div>
        </div>

        <img
          src={Avatar}
          className="w-[40px] cursor-pointer hover:border-2 hover:rounded-[50%] hover:border-[#f1730c]"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Navigation;

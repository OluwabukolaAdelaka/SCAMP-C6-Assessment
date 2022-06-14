import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1440px] flex justify-between mx-auto bg-[#f8f9fa] h-20 px-6 items-center">
      <div className="flex">
        <div onClick={handleNav}>
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
        <ul className="hidden md:flex text-lg ml-9 text-[#2c2d2ea6]">
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Collections
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Women
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Men
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            About
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Contact
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div
        className={
          nav
            ? "md:hidden w-[60%] h-screen top-20 left-0 absolute text-lg transition ease-in-out delay-1000"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Collections
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Women
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Men
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            About
          </li>
          <li className="px-[25px] py-[6px] hover:border-b-2 hover:border-b-[#f1730c]">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex">
        <img
          src={Cart}
          className="relative w-[50%] h-[50%] pt-3 mr-6 md:mr-8"
          alt="shopping cart"
        />
        <div className="absolute bg-primary-100 w-6 right-[70px] text-white text-center rounded-full">
          0
        </div>

        <img
          src={Avatar}
          className="w-[40px] hover:border-2 hover:rounded-[50%] hover:border-[#f1730c]"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Navigation;

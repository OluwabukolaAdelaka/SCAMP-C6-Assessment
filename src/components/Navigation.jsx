import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  return (
    <div className="max-w-[1440px] flex justify-between mx-auto bg-[#f8f9fa] h-20 px-6 items-center">
      <div className="flex">
        <GiHamburgerMenu size={40} className="pr-4" />
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

      <div className="flex">
        <img
          src={Cart}
          className="relative w-[50%] h-[50%] pt-3 mr-6 md:mr-8"
          alt="shopping cart"
        />

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

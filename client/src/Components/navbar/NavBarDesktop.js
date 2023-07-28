import React from "react";
import nike from "./nike.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const NavBarDesktop = () => {
  return (
    <div className="hidden md:flex w-full justify-between items-center h-16 px-1">
      <div>
        <img src={nike} alt="logo" className="h-[60px] px-4" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">New & Featured</li>
        <li className="p-4">All Products</li>
        <li className="p-4">Men</li>
        <li className="p-4">Women</li>
        <li className="p-4">Kids</li>
      </ul>
      <div className="hidden md:flex md:flex-row">
        <AiOutlineHeart size={25} className="cursor-pointer" />
        <BiShoppingBag size={25} className="cursor-pointer mx-5" />
      </div>
    </div>
  );
};

export default NavBarDesktop;

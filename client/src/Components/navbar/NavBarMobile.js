import React, { useState } from "react";
import nike from "./nike.jpg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const NavBarMobile = () => {
  const [hamBurger, setHamBurger] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleHamBurger = () => {
    setHamBurger(!hamBurger);
    setLogo(!logo);
  };
  return (
    <div className="flex w-full justify-between items-center h-[60px] px-1 absolute md:hidden">
      <div>
        <img src={nike} alt="logo" className="h-[60px] px-4" />
      </div>
      <div className="flex flex-row">
        <AiOutlineHeart size={25} className="cursor-pointer" />
        <BiShoppingBag size={25} className="cursor-pointer mx-5" />
        <div onClick={handleHamBurger} className="md:hidden">
          {hamBurger ? (
            <AiOutlineClose size={25} className="cursor-pointer mr-5" />
          ) : (
            <HiOutlineMenuAlt4 size={25} className="cursor-pointer mr-5" />
          )}
        </div>
        <div
          onClick={handleHamBurger}
          className={
            hamBurger
              ? "absolute right-0 top-0 w-72 h-[100vh] bg-white px-1 py-5 flex flex-col"
              : "absolute left-[-200%] top-0 w-72 h-[100-vh] bg-white px-1 py-5 flex flex-col"
          }
        >
          <div onClick={handleHamBurger} >
            <AiOutlineClose
              size={25}
              className="cursor-pointer float-right"
            />
          </div>
          <ul>
            <li className="">New & Featured</li>
            <li className="">All Products</li>
            <li className="">Men</li>
            <li className="">Women</li>
            <li className="">Kids</li>
            <div className="flex justify-start gap-4 my-6 ml-5">
              <FaTwitter className="icon"  size={25}/>
              <FaInstagram className="icon" size={25}/>
              <FaYoutube className="icon" size={25}/>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;

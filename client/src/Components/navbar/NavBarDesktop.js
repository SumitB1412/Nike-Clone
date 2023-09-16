import React from "react";
import {Link} from 'react-router-dom';

import nike from "./nike.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const NavBarDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex w-full justify-between items-center h-16 px-1">
      <div>
        <Link to={'/'}><img src={nike} alt="logo" className="h-[60px] px-4" /></Link>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-black cursor-pointer"><Link to={'/'}>New & Featured</Link></li>

        <li className="p-4 relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-black cursor-pointer"><Link to={'/products'}>All Products</Link></li>
        <li className="p-4 relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-black cursor-pointer"><Link to={'/products'}>Men</Link></li>
        <li className="p-4 relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-black cursor-pointer"><Link to={'/products'}>Women</Link></li>
        <li className="p-4 relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-black cursor-pointer"><Link to={'/products'}>Kids</Link></li>
      </ul>
      <div className="hidden md:flex md:flex-row">
        <Link to={'/favourites'}><AiOutlineHeart size={25} className="cursor-pointer"/></Link>
        <Link to={'/cart'}><BiShoppingBag size={25} className="cursor-pointer mx-5" /></Link>
      </div>
    </div>
  );
};

export default NavBarDesktop;

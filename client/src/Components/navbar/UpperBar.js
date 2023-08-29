import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";
import {BsCart,BsCartCheckFill} from "react-icons/bs";
import {FiLogOut} from "react-icons/fi";
import { getItem } from "../../utils/localStorage";


const UpperBar = () => {

  const user = useSelector((state) => state.authReducer);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return user.isLogin ? (
    <div className="h-9 bg-gray-100 flex justify-end py-2 pr-5">
      <div>
        <div className="pl-32">
          <div className="flex cursor-pointer" onClick={toggle}>
            <div>
              <button className="text-sm">
                Pooja
              </button>
            </div>
            <div>
              {open ? (
                <MdKeyboardArrowUp size={20} className="pt-1" />
              ) : (
                <MdKeyboardArrowDown size={20} className="pt-1" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "flex bg-white absolute mt-2 border border-gray-200 rounded-lg"
              : "hidden"
          }
        >
          <div className="pl-4 pr-24 py-2 w-full flex flex-col gap-4">
          <Link to={'/favourites'}><div className="w-full flex text-sm"><AiOutlineHeart size={20} className="pr-2"/><p className="pl-2">Wishlist</p></div></Link>
          <Link to={'/orders'}><div className="w-full flex text-sm"><BsCartCheckFill size={20} className="pr-2"/><p className="pl-2">Orders</p></div></Link>
          <Link to={'/cart'}><div className="w-full flex text-sm"><BsCart size={20} className="pr-2"/><p className="pl-2">Cart</p></div></Link>
          <Link to={'/'}><div className="w-full flex text-sm"><FiLogOut size={20} className="pr-2"/><p className="pl-2">Logout</p></div></Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-9 bg-gray-100 flex justify-end py-2 pr-7">
      <div>
        <Link to={'/login'}><button className="text-sm mr-4">Sign In</button></Link>
      </div>
      <div>
        <Link to={'/register'}><button className="text-sm">Join Us</button></Link>
      </div>
    </div>
  );
};

export default UpperBar;

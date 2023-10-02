import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import {useDispatch, useSelector} from "react-redux";
import { getCartItems } from "../../Redux/cart/actions";
import { subTotal, productCount } from "../../utils/summaryCalculator";

const Cart = () => {
  const product = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    getCartItems(dispatch);
  },[product]);
  const subValue = subTotal(product);
  const numberOfProducts = productCount(product);
  return (
    <div className="py-10 px-4 flex flex-col md:px-12 lg:px-24 lg:flex-row">
      <div className="w-full lg:w-[70vw]">
        <h4 className="text-2xl">Bag</h4>
        <div className="flex flex-col py-4 gap-4">
          {product.map((item,index) => (
            <>
              <CartCard product={item} key={index}/>
            </>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[30vw] lg:pl-10">
        <h4 className="text-2xl">Summary</h4>
        <div className="flex flex-col font-light">
          <div className="pt-6 pb-1 flex justify-between">
            <div>Subtotal</div>
            <div>₹{subValue}</div>
          </div>
          <div className="py-1 flex justify-between">
            <div>Quantity</div>
            <div>{numberOfProducts}</div>
          </div>
          <div className="py-1 flex justify-between">
            <div>Delivery Charges</div>
            <div>₹100</div>
          </div>
          <div className="py-1 pb-3 flex justify-between">
            <div>Discount</div>
            <div>₹0</div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="py-4 flex justify-between">
            <div>Total</div>
            <div>₹{(subValue+100)}</div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="pt-7">
            <Link to={"/checkout"}>
              <button className="w-full h-12 rounded-full bg-black text-white  hover:bg-black/70">
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

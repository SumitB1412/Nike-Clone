import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCartItem, updateCartItem } from "../../Redux/cart/actions";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(product.quantity);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      dispatch(updateCartItem(product._id, count + 1));
      //window.location.reload();
    } else {
      alert("You can add upto 10 same products!");
    }
  };
  const handleDecrement = () => {
    setCount(count - 1);
    dispatch(updateCartItem(product._id, count - 1));
    //window.location.reload();
  };
  const handleRemoveFromCart = () => {
    deleteCartItem(dispatch, product._id);
    //window.location.reload();
  };
  return (
    <>
      <div className="flex gap-2 sm:gap-8">
        <Link to={"/products/description/:id"}>
          <div>
            <img
              src={product.img[0]}
              alt={product.title}
              className="h-20 w-20 sm:h-36 sm:w-36 object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-between">
            <div>
              <h4 className="text-base sm:text-lg">{product.title}</h4>
            </div>
            <div>
              <h4 className="text-base sm:text-lg">MRP: ₹{product.price}</h4>
            </div>
          </div>
          <div>
            <h4 className="text-sm sm:text-base text-gray-400">
              {product.description}
            </h4>
          </div>
          <div>
            <h4 className="text-sm sm:text-base text-gray-400">
              {product.color}
            </h4>
          </div>
          <div className="py-1 sm:py-3 flex gap-2 sm:gap-4">
            <div>
              <h4 className="text-base sm:text-lg">Quantity: </h4>
            </div>
            <div>
              <button
              disabled={count===1?true:false}
                className={count === 1 ?"text-xs sm:text-base border border-black/20 rounded-full px-1 sm:px-2 text-black/20":"text-xs sm:text-base border border-black rounded-full px-1 sm:px-2"}
                onClick={() => handleDecrement()}
              >
                -
              </button>
            </div>
            <div>
              <h4 className="text-base sm:text-lg">{count}</h4>
            </div>
            <div>
              <button
              disabled={count===10?true:false}
                className={count === 10 ?"text-xs sm:text-base border border-black/20 rounded-full px-1 sm:px-2 text-black/20":"text-xs sm:text-base border border-black rounded-full px-1 sm:px-2"}
                onClick={() => handleIncrement()}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex">
            <div>
              <h4 className="text-sm sm:text-base text-gray-400">Favourites</h4>
            </div>
            <div
              onClick={() => handleRemoveFromCart()}
              className="cursor-pointer"
            >
              <h4 className="text-sm sm:text-base text-gray-400 pl-4">
                Remove
              </h4>
            </div>
          </div>
        </div>
        {/* <div>
      <h4 className="text-lg pl-56">MRP: ₹{product.price}</h4>
      </div> */}
      </div>
      <div className="border border-gray-200"></div>
    </>
  );
};

export default CartCard;

import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="flex gap-2 sm:gap-8">
      <div>
        <img
          src={product.img[0]}
          alt={product.title}
          className="h-20 w-20 sm:h-36 sm:w-36 object-cover"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-between">
          <div><h4 className="text-base sm:text-lg">{product.title}</h4></div>
          <div><h4 className="text-base sm:text-lg">MRP: ₹{product.price}</h4></div>
        </div>
        <div>
          <h4 className="text-sm sm:text-base text-gray-400">{product.description}</h4>
        </div>
        <div>
          <h4 className="text-sm sm:text-base text-gray-400">{product.color}</h4>
        </div>
        <div className="py-1 sm:py-3 flex gap-2 sm:gap-4">
          <div>
            <h4 className="text-base sm:text-lg">Quantity: </h4>
          </div>
          <div>
            <button className="text-xs sm:text-base border border-black rounded-full px-1 sm:px-2">-</button>
          </div>
          <div>
            <h4 className="text-base sm:text-lg pt-[2px]">0</h4>
          </div>
          <div>
            <button className="text-xs sm:text-base border border-black rounded-full px-1 sm:px-2">+</button>
          </div>
        </div>
        <div className="flex">
          <div>
            <h4 className="text-sm sm:text-base text-gray-400">Favourites</h4>
          </div>
          <div>
            <h4 className="text-sm sm:text-base text-gray-400 pl-4">Remove</h4>
          </div>
        </div>
      </div>
      {/* <div>
      <h4 className="text-lg pl-56">MRP: ₹{product.price}</h4>
      </div> */}
    </div>
  );
};

export default CartCard;

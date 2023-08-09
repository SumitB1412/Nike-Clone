import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="flex gap-8">
      <div>
        <img
          src={product.img[0]}
          alt={product.title}
          className="h-36 w-36 object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div>
            <h4 className="text-lg">{product.title}</h4>
          </div>
          <div>
            <h4 className="text-lg pl-[25vw]">MRP: ₹{product.price}</h4>
          </div>
        </div>
        <div>
          <h4 className="text-base text-gray-400">{product.description}</h4>
        </div>
        <div>
          <h4 className="text-base text-gray-400">{product.color}</h4>
        </div>
        <div className="py-3 flex gap-4">
          <div>
            <h4 className="text-lg">Quantity: </h4>
          </div>
          <div>
            <button className="border border-black rounded-full px-2">-</button>
          </div>
          <div>
            <h4>0</h4>
          </div>
          <div>
            <button className="border border-black rounded-full px-2">+</button>
          </div>
        </div>
        <div className="flex">
          <div>
            <h4 className="text-base text-gray-400">Favourites</h4>
          </div>
          <div>
            <h4 className="text-base text-gray-400 pl-4">Remove</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

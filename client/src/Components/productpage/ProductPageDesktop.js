import React from "react";

const ProductPageDesktop = (props) => {
  return (
    <div className="hidden lg:flex flex-row pl-12 py-16">
      <div className="hidden lg:grid grid-cols-2 gap-2">
        {props.product.img.map((el, index) => {
          return (
            <div key={index}>
              <img
                src={el}
                alt={props.product.title}
                className="w-80 h-96 object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col px-20 gap-6">
        <div>
          <h4 className="text-2xl">{props.product.title}</h4>
          <p className="text-gray-600">{props.product.description}</p>
        </div>
        <div>
          <p className="text-xl">MRP: ₹{props.product.price}</p>
          <p className="text-md font-light text-gray-400">
            incl. of taxes
            <br />
            (Also includes all applicable duties)
          </p>
        </div>
        <div>
          <p className="text-lg pb-1">Select Size:</p>
          <div className="flex gap-1">
            <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
              {props.product.size[0]}
            </button>
            <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
              {props.product.size[1]}
            </button>
            <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
              {props.product.size[2]}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <button className="w-96 h-16 text-md bg-black text-white text-center rounded-full hover:bg-black/70">
            Add to Bag
          </button>
          <button className="w-96 h-16 text-md border-2 border-gray-300  text-center rounded-full hover:border-gray-700">
            Favourite ♡
          </button>
        </div>
        <div className="pt-4">
          <p className="text-base underline font-medium pb-2">
            Product Details:
          </p>
          <ul className="list-disc pl-4 text-sm font-normal">
            <li>Gender: {props.product.gender}</li>
            <li>Color: {props.product.color}</li>
            <li>Category: {props.product.category}</li>
            <li>Rating: {props.product.rating}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPageDesktop;

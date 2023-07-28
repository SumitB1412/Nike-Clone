import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductPageMobile = (props) => {
    const responsive = {
        mobile: {
          breakpoint: { max: 2000, min: 0 },
          items: 1,
        },
      };
  return (
    <div className="flex flex-col lg:hidden pt-32 pb-14 gap-4">
      <div className="px-8 pb-3">
        <h4 className="text-2xl">{props.product[0].title}</h4>
        <p className="text-gray-600">{props.product[0].description}</p>
      </div>
      <div>
      <Carousel responsive={responsive}>
          {props.product[0].img.map((item, index) => (
            <div>
              <img
                src={item}
                alt={index}
                className="w-full"
              />
            </div>
          ))}
      </Carousel>
      </div>
      <div className="px-8">
        <p className="text-xl">MRP: ₹{props.product[0].price}</p>
        <p className="text-md font-light text-gray-400">
          incl. of taxes
          <br />
          (Also includes all applicable duties)
        </p>
      </div>
      <div className="px-8">
        <p className="text-lg pb-1">Select Size:</p>
        <div className="flex gap-1">
          <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
            {props.product[0].size[0]}
          </button>
          <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
            {props.product[0].size[1]}
          </button>
          <button className=" text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black">
            {props.product[0].size[2]}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-3 px-8">
        <button className="w-[100%] h-16 text-md bg-black text-white text-center rounded-full hover:bg-black/60">
          Add to Bag
        </button>
        <button className="w-[100%] h-16 text-md border-2 border-gray-300  text-center rounded-full hover:border-gray-700">
          Favourite ♡
        </button>
      </div>
      <div className="pt-4 px-8">
          <p className="text-base underline font-medium pb-2">
            Product Details:
          </p>
          <ul className="list-disc pl-4 text-sm font-normal">
            <li>Gender: {props.product[0].gender}</li>
            <li>Color: {props.product[0].color}</li>
            <li>Category: {props.product[0].category}</li>
            <li>Rating: {props.product[0].rating}</li>
          </ul>
        </div>
    </div>
  );
};

export default ProductPageMobile;

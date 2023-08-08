import React from "react";
import { BsFilterRight } from "react-icons/bs";
import Dropdown from "../Components/common/Dropdown";
import ProductsFilter from "../Components/Products/ProductsFilter";

const Products = () => {
  return (
    <div className="mt-10 w-[90%] m-auto sm:top-24 md:top-20">
      <div className="border-2 border-red-500 flex justify-between items-center">
        <p className="text-lg md:text-xl lg:text-2xl">Men's Clothing (500)</p>
        <div className="hidden lg:flex justify-between items-center">
          <button className="border-0 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center">
            Hide Filters <BsFilterRight />
          </button>
          <Dropdown />
        </div>
        <div className="lg:hidden block">
          <button className="border border-black-500 bg-transparent px-4 py-2 rounded-lg focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center">
            Filters <BsFilterRight />
          </button>
        </div>
      </div>
      <div>
        <ProductsFilter />
      </div>
    </div>
  );
};

export default Products;

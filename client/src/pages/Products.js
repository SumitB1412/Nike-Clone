import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import Dropdown from "../Components/common/Dropdown";
import ProductsFilter from "../Components/Products/ProductsFilter";
import SingleCard from "../Components/Products/SingleCard";

const products = [
  {
    title: "Nike Invicible 3",
    gender: "Female",
    description: "Best Ever Running Shoes",
    category: "Shoes",
    price: "3695.00",
    size: ["Small", "Medium", "Large"],
    color: "Black",
    rating: "4.4",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
    ],
  },
  {
    title: "Nike Invicible 3",
    gender: "Female",
    description: "Best Ever Running Shoes",
    category: "Shoes",
    price: "3695.00",
    size: ["Small", "Medium", "Large"],
    color: "Black",
    rating: "4.4",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
    ],
  },
  {
    title: "Nike Invicible 3",
    gender: "Female",
    description: "Best Ever Running Shoes",
    category: "Shoes",
    price: "3695.00",
    size: ["Small", "Medium", "Large"],
    color: "Black",
    rating: "4.4",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
    ],
  },
  {
    title: "Nike Invicible 3",
    gender: "Female",
    description: "Best Ever Running Shoes",
    category: "Shoes",
    price: "3695.00",
    size: ["Small", "Medium", "Large"],
    color: "Black",
    rating: "4.4",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
    ],
  },
];

const Products = () => {
  const [filtersHidden, setFiltersHidden] = useState(false);
  const handleFilterShow = () => {
    setFiltersHidden(!filtersHidden);
  };
  return (
    <div className="mt-10 w-[90%] m-auto sm:top-24 md:top-20">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-xl lg:text-2xl">Men's Clothing ({products.length})</p>
        <div className="hidden lg:flex justify-between items-center">
          <button
            onClick={handleFilterShow}
            className="border-0 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center"
          >
            {filtersHidden ? "Show Filters" : "Hide Filters"} <BsFilterRight />
          </button>
          <Dropdown />
        </div>
        <div className="lg:hidden block">
          <button className="border border-black-500 bg-transparent px-4 py-2 rounded-lg focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center">
            Filters <BsFilterRight />
          </button>
        </div>
      </div>
      <div className={`mt-6 flex ${filtersHidden ? "" : "gap-6"}`}>
        <div
          className={`lg:block hidden ${
            filtersHidden ? "w-[0%]" : "w-30%"
          }`}
        >
          {filtersHidden ? "" : <ProductsFilter />}
        </div>
        <div
          className={`grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 ${
            filtersHidden ? "w-[100%]" : "w-70%"
          }`}
        >
          {products &&
            products.map((el, index) => {
              return <SingleCard data={el} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;

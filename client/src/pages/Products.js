import React, { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import ProductsFilter from "../Components/Products/ProductsFilter";
import SingleCard from "../Components/Products/SingleCard";
import { FilterDrawer } from "../Components/Products/FilterDrawer";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getAllProducts } from "../Redux/products/actions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [filtersHidden, setFiltersHidden] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  const handleFilterShow = () => {
    setFiltersHidden(!filtersHidden);
  };


  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  return (
    <div className="mt-10 w-[90%] m-auto sm:top-24 md:top-20">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-xl lg:text-2xl">
          Men's Clothing ({products.length})
        </p>
        <div className="hidden lg:flex justify-between items-center">
          <button
            onClick={handleFilterShow}
            className="border-0 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center"
          >
            {filtersHidden ? "Show Filters" : "Hide Filters"} <BsFilterRight />
          </button>
          <div>
            <FormControl size="small" className="w-28 border-0">
              <InputLabel id="sort">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="lg:hidden block">
          <button
            onClick={toggleDrawer}
            className="border border-black-500 bg-transparent px-4 py-2 rounded-lg focus:outline-none focus:ring-0 hover:bg-[#f3f4f6] transition-colors duration-300 flex items-center"
          >
            Filters <BsFilterRight />
          </button>
          <FilterDrawer
            drawerIsOpen={drawerIsOpen}
            toggleDrawer={toggleDrawer}
          />
        </div>
      </div>
      <div className={`mt-6 flex ${filtersHidden ? "" : "gap-6"}`}>
        <div
          className={`lg:block hidden ${filtersHidden ? "w-[0%]" : "w-[20%]"}`}
        >
          {filtersHidden ? "" : <ProductsFilter />}
        </div>
        <div
          className={`grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 ${
            filtersHidden ? "w-[100%]" : "w-[80%]"
          }`}
        >
          {products &&
            products.map((el, index) => {
              return (
                <SingleCard
                  data={el}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;

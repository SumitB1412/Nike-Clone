import React, { useEffect } from "react";
import ProductPageDesktop from "./ProductPageDesktop";
import ProductPageMobile from "./ProductPageMobile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/products/actions";

const ProductPage = () => {
  const { singleProduct } = useSelector((state) => state.productReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleProduct(dispatch, id);
  }, []);
  return (
    <>
      {singleProduct && <ProductPageDesktop product={singleProduct} />}
      {singleProduct && <ProductPageMobile product={singleProduct} />}
    </>
  );
};

export default ProductPage;

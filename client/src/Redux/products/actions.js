import axios from "axios";
import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "./actionTypes";
import { baseURL } from "../../baseURL";

export const getAllProducts = async (dispatch) => {
  let res = await axios.get(`${baseURL}/products/getAll`);
  dispatch({ type: GET_PRODUCTS, payload: res.data.data });
};

export const getSingleProduct = async (dispatch, productID) => {
  let res = await axios.get(
    `${baseURL}/products/get-single-product/${productID}`
  );
  dispatch({ type: GET_SINGLE_PRODUCT, payload: res.data.product });
};

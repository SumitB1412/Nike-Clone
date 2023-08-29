import axios from "axios";
import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "./actionTypes";

export const getAllProducts = async (dispatch) => {
  let res = await axios.get("http://localhost:7000/products/getAll");
  dispatch({ type: GET_PRODUCTS, payload: res.data.data });
};

export const getSingleProduct = async (dispatch,productID) => {
  let res = await axios.get(`http://localhost:7000/products/get-single-product/${productID}`);
  dispatch({type:GET_SINGLE_PRODUCT,payload:res.data.product})
}
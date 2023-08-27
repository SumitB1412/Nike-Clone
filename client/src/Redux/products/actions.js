import axios from "axios";
import { GET_PRODUCTS } from "./actionTypes";

export const getAllProducts = async (dispatch) => {
  let res = await axios.get("http://localhost:7000/products/getAll");
  dispatch({ type: GET_PRODUCTS, payload: res.data.data });
};

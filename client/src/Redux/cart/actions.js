import axios from "axios";
import { baseURL } from "../../baseURL";
import { getItem } from "../../utils/localStorage";
import { DELETE_CART_DATA, GET_CART_DATA, POST_CART_DATA, UPDATE_CART_DATA } from "./actionTypes";

export const getCartItems = async (dispatch) => {
  const userID = getItem("userID");
  const res = await axios.get(
    `${baseURL}/cart/get-cart?userID=${userID}`
  );
  dispatch({type: GET_CART_DATA,payload: res.data.data});
};

export const addToCart = async(dispatch,product) => {
  const userID = getItem("userID");
  const res = await axios.post(`${baseURL}/cart/add-cart`,{...product,user:userID,quantity: 1});
  dispatch({type: POST_CART_DATA,payload: null});
};


export const updateCartItem = (productID,updatedQuantity) => async(dispatch) => {
  const res = await axios.patch(
    `${baseURL}/cart/update-cart`,({_id: productID,quantity: updatedQuantity})
  );
  dispatch({type: UPDATE_CART_DATA,payload: null});
}

export const deleteCartItem =  async(dispatch,id) => {
  const res = await axios.delete(
    `${baseURL}/cart/delete-cart?productID=${id}`,
  );
  dispatch({type: DELETE_CART_DATA,payload: null});
}
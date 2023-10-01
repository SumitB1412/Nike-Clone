import axios from "axios";
import { baseURL } from "../../baseURL";
import { getItem } from "../../utils/localStorage";
import { GET_FAVOURITES } from "./actionTypes";

export const getFavourites = async (dispatch) => {
  const userID = getItem("userID");
  const res = await axios.get(
    `${baseURL}/favourites/get-favourites?userId=${userID}`
  );
  dispatch({ type: GET_FAVOURITES, payload: res.data.data });
};

export const addFavourites = async (dispatch, product) => {
  const userID = getItem("userID");
  //   console.log({ ...product, user: userID });
  const res = await axios.post(`${baseURL}/favourites/add-to-favourites`, {
    ...product,
    user: userID,
  });
  console.log(res.data);
};

export const removeFromFavourites = async (dispatch, productID) => {
  const res = await axios.delete(
    `${baseURL}/favourites/remove-from-favourites?productId=${productID}`
  );
  console.log(res.data);
  getFavourites(dispatch);
};

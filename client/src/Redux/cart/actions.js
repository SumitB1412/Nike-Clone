import axios from "axios";
import { baseURL } from "../../baseURL";
import { getItem } from "../../utils/localStorage";

export const getCartData = async () => {
  const userID = getItem("userID");
  const res = await axios.get(
    `${baseURL}/cart/get-cart`,
    JSON.stringify({ userID })
  );
  console.log(res);
};

export const addToCart = async (product) => {
  const userID = getItem("userID");
  const res = await axios.post(`${baseURL}/cart/add-cart`, {
    ...product,
    userID,
  });
  console.log(res);
};

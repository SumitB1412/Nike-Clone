import axios from "axios";
import { USER_LOGIN } from "./actionTypes";
import { baseURL } from "../../baseURL";
import { setItem } from "../../utils/localStorage";

export const getRegisterSuccess = (data, navigate) => async (dispatch) => {
  try {
    let res = await axios.post(`${baseURL}/users/register`, data);
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export const getLoginSuccess = (data, navigate) => async (dispatch) => {
  try {
    let res = await axios.post(`${baseURL}/users/login`, data);
    res = res.data;
    setItem("token",res.token)
    setItem("userID",res.userID)
    setItem("user",res.userName);
    dispatch({ type: USER_LOGIN, payload: res });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

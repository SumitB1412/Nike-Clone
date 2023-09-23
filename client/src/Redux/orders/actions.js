import axios from "axios";
import { baseURL } from "../../baseURL";
import { getItem } from "../../utils/localStorage";

export const getOrderData = async(dispatch) => {
    const userID=getItem("userID");
    const res= await axios.get(`${baseURL}/order/get-orders`,JSON.stringify({userID}));
    console.log(res);
}

export const postOrderData = (order) => async(dispatch) => {
    const userID=getItem("userID");
    const res=await axios.post(`${baseURL}/order/post-orders`,{shippingDetails:order,user:userID});
    console.log(res);
}
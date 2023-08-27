import axios from "axios";
import { USER_LOGIN} from "./actionTypes";

export const getRegisterSuccess = (data,navigate) => async (dispatch) => {
    try {
        let res = await axios.post("http://localhost:7000/users/register",data);
        res=res.data;
        console.log(res.msg);
        navigate("/login");
    } catch (error) {
        console.log(error);
    }
}

export const getLoginSuccess = (data,navigate) => async (dispatch) => {
    try {
        let res = await axios.post("http://localhost:7000/users/login",data);
        res=res.data;
        dispatch({type:USER_LOGIN,payload:res});
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
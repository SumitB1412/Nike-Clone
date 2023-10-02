import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

const initState = {
  userName:"",
  isLogin: false,
  token: "",
  user:""
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
      return{
        ...state,
      }
    case USER_LOGIN:
      return{
        ...state,
        isLogin: true,
        token: payload.token,
        user: payload.userID,
        userName: payload.userName
      }
    default: 
      return state;
  }
};

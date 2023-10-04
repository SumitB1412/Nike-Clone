import { DELETE_CART_DATA, GET_CART_DATA, POST_CART_DATA, UPDATE_CART_DATA } from "./actionTypes";

const initState = {
  cart: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA: {
      return{
        ...state,
        cart: payload
      }
    }
    case POST_CART_DATA: {
      return{
        ...state
      }
    }
    case UPDATE_CART_DATA: {
      return {
        ...state,
      }
    }
    case DELETE_CART_DATA: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
};

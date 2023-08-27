import { GET_PRODUCTS } from "./actionTypes";

const initState = { loading: false, error: false, products: [] };

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    default:
      return state;
  }
};

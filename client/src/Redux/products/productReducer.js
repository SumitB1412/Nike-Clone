import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  products: [],
  singleProduct: null,
};

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
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        singleProduct: payload,
      };
    }
    default:
      return state;
  }
};

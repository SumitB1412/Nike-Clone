import { GET_FAVOURITES } from "./actionTypes";

const initState = {
  favourites: [],
};

export const favouriteReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_FAVOURITES: {
      return {
        favourites: payload,
      };
    }
    default:
      return state;
  }
};

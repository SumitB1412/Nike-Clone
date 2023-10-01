import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { authReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { productReducer } from "./products/productReducer";
import { favouriteReducer } from "./favourites/favouriteReducer";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  favouriteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

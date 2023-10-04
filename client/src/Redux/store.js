
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { productReducer } from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
  productReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

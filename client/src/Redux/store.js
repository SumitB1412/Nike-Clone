import {legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/productReducer";

const rootReducer = combineReducers({ productReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

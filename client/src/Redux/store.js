import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

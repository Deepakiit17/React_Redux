import { createStore, applyMiddlewarw } from "react-redux";
import reducers from "../reducers";
import thunk from "redux-thunk";


export const store = createStore(reducers, {}, applyMiddlewarw(thunk))
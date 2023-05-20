import { combineReducers } from "react-redux";
import amountReducer from "./amountReducer";

 const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;
import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";


export const routeReducer = combineReducers({
    commentdata: commentReducer,
});

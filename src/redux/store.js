import { createStore } from "redux";
import { routeReducer } from "./reducer/routeReducer";

export const store = createStore(routeReducer)
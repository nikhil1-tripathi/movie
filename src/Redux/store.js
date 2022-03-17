import { createStore } from "redux";
import { MovieReducer } from "./reducer";
export const store = createStore(MovieReducer);

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { blogReducer } from "./reducers";

export const reduxStore = createStore(combineReducers({
    allBlogs: blogReducer
}), {}, composeWithDevTools(applyMiddleware(thunk)))
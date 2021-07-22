import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import ThunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));

export default store;

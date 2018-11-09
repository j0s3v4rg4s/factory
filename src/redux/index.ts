import { createStore } from "redux";
import reducers from "./reduers";
import {composeWithDevTools} from "redux-devtools-extension";

const defaultState = {};

const store = (initialStore = defaultState) => {
    return createStore(reducers, initialStore, composeWithDevTools())
};

export default store;

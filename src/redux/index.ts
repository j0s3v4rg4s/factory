import { createStore, Store } from "redux";
import reducers from "./reduers";
import { composeWithDevTools } from "redux-devtools-extension";
import { DefaultState } from "./models";
import { defaultStateFirebase } from "../core/lib/firebase/reducer";

const defaultState:DefaultState = {
    firebaseReducer: defaultStateFirebase,
    userReducer: {}
};

export const storeInstance:Store = createStore(reducers, defaultState, composeWithDevTools());

const store = (): Store => {
    return storeInstance
};
export default store;

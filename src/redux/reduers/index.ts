import {combineReducers} from "redux";
import {userReducer} from "./user";
import { firebaseReducer } from "../../core/lib/firebase/reducer";


const reducers = combineReducers({
    userReducer,
    firebaseReducer
});

export default reducers;

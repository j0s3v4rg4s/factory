import { ActionsType } from "../../actions/interfaces";
import { LOGIN, LOGIN_COMPLETE } from "../../actions/login";

export const userReducer = (state = {}, action: ActionsType) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, ...{ login: action.payload } };
        case LOGIN_COMPLETE:
            return { ...state, ...{ login: action.payload } };
        default:
            return state;
    }
};

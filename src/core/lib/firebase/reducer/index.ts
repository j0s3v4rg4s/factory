import { ActionsType } from '../../../../redux/actions/interfaces';
import { FIRE_LOGIN, FIRE_LOGOUT } from '../actions/types';
import { FireState } from "../model";

export const defaultStateFirebase: FireState = {
    profile: null,
};

export const firebaseReducer = (state = defaultStateFirebase, action: ActionsType) => {
    switch (action.type) {
        case FIRE_LOGIN:
            return { ...state, ...{ profile: action.payload } };
        case FIRE_LOGOUT:
            return { ...state, ...{ profile: null } };
        default:
            return state || {};
    }
};

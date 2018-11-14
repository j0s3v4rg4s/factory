import { ActionsType } from '../../../../redux/actions/interfaces';
import { FIRE_LOGIN, FIRE_LOGOUT } from './types';
import firebase from "firebase";

export const firebaseLogin = (user: firebase.User): ActionsType => {
    return {
        type: FIRE_LOGIN,
        payload: user,
    };
};

export const firebaseLogOut = (): ActionsType => {
    return {
        type: FIRE_LOGOUT,
        payload: {},
    };
};

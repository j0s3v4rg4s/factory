import { ActionsType } from '../interfaces';
import { FIRE_LOGIN } from './firebaseTypes';
import { User } from 'firebase/auth';

export const firebaseLogin = (user: User): ActionsType => {
    return {
        type: FIRE_LOGIN,
        payload: user,
    };
};

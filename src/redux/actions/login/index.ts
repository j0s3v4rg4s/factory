export * from './types';

import { ActionsType } from '../interfaces';
import { ILoginState, LOGIN, LOGIN_COMPLETE } from './types';

export const loginAction = (email: string, pass: string): ActionsType<ILoginState> => {
    return {
        type: LOGIN,
        payload: { email, pass, isLogin: true },
    };
};

export const loginComplete = (): ActionsType<ILoginState> => {
    return {
        type: LOGIN_COMPLETE,
        payload: { email: 'hola', pass: '123', isLogin: false },
    };
};

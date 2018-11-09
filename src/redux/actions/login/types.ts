export const LOGIN = "loginAction";
export const LOGIN_COMPLETE = "login_complete";
export const LOGIN_ERROR = "login_error";

export interface ILoginState {
    email: string;
    pass: string;
    isLogin: boolean;
}

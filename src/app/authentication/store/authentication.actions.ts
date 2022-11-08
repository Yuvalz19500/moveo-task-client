import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user";

export enum AuthActions {
    login = '[Authentication] Login',
    loginSuccess = '[Authentication] Login Success',
    loginFail = '[Authentication] Login Fail'
}

export const login = createAction(AuthActions.login, props<{ payload: {username: string; password: string}}>());
export const loginSuccess = createAction(AuthActions.loginSuccess, props<{ payload: {user: User}}>());
export const loginFail = createAction(AuthActions.loginFail);
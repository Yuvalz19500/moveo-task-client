import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user";

export enum SessionActions {
    getCode = '[Session] Get Code',
    getCodeSuccess = '[Session] Get Code Success',
    getCodeFail = '[Session] Get Code Fail',

    codeChange = '[Session] Code Change'
}

export const getCode = createAction(SessionActions.getCode, props<{ payload: {codeBlockId: number}}>());
export const getCodeSuccess = createAction(SessionActions.getCodeSuccess, props<{ payload: {code: string}}>());
export const getCodeFail = createAction(SessionActions.getCodeFail);

export const codeChange = createAction(SessionActions.codeChange, props<{ payload: {code: string}}>());
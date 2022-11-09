import { createReducer, on } from "@ngrx/store";
import { LobbyCodeBlock } from "src/app/interfaces/lobby";
import { User } from "src/app/interfaces/user";
import { getCodeSuccess } from "./session.actions";

export const sessionFeatureKey = 'session';

export interface State {
    code: string | null
}

export const initialState: State = {
    code: null
}

export const sessionReducer = createReducer(
    initialState,
    on(getCodeSuccess, (state, { payload }) => ({...state, code: payload.code})),
)
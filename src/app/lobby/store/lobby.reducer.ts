import { createReducer, on } from "@ngrx/store";
import { LobbyCodeBlock } from "src/app/interfaces/lobby";
import { User } from "src/app/interfaces/user";
import { getCodeBlocksSuccess, getStudentsSuccess } from "./lobby.actions";

export const lobbyFeatureKey = 'lobby';

export interface State {
    students: User[],
    codeBlocks: LobbyCodeBlock[]
}

export const initialState: State = {
    students: [],
    codeBlocks: []
}

export const lobbyReducer = createReducer(
    initialState,
    on(getStudentsSuccess, (state, { payload }) => ({...state, students: payload.students})),
    on(getCodeBlocksSuccess, (state, { payload }) => ({...state, codeBlocks: payload.codeBlocks})),
)
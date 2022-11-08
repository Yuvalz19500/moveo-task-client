import { createReducer } from "@ngrx/store";
import { LobbyCodeBlock } from "src/app/interfaces/lobby";
import { User } from "src/app/interfaces/user";

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
)
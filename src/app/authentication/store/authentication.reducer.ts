import { createReducer } from "@ngrx/store";
import { User } from "src/app/interfaces/user";

export const authenticationFeatureKey = 'auth';

export interface State {
    user: User | null
}

export const initialState: State = {
    user: null
}

export const authenticationReducer = createReducer(
    initialState,
)
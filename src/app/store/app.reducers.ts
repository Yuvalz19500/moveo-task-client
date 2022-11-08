import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, initialState, State } from "../authentication/store/authentication.reducer";

export interface IAppState {
    auth: State;
  }
  
  export const initialAppState: IAppState = {
    auth: initialState,
  };

export const appReducers: ActionReducerMap<IAppState, any> = {
    auth: authenticationReducer,
  };
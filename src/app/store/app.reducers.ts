import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, initialState as initialAuthState, State as AuthState } from "../authentication/store/authentication.reducer";
import { State as LobbyState, initialState as initialLobbyState, lobbyReducer } from "../lobby/store/lobby.reducer";

export interface IAppState {
    auth: AuthState;
    lobby: LobbyState
  }
  
  export const initialAppState: IAppState = {
    auth: initialAuthState,
    lobby: initialLobbyState
  };

export const appReducers: ActionReducerMap<IAppState, any> = {
    auth: authenticationReducer,
    lobby: lobbyReducer
  };
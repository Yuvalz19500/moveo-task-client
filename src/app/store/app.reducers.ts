import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, initialState as initialAuthState, State as AuthState } from "../authentication/store/authentication.reducer";
import { State as LobbyState, initialState as initialLobbyState, lobbyReducer } from "../lobby/store/lobby.reducer";
import { sessionReducer, initialState as initialSessionState, State as SessionState } from "../session/store/session.reducer";

export interface IAppState {
    auth: AuthState;
    lobby: LobbyState;
    session: SessionState;
  }
  
  export const initialAppState: IAppState = {
    auth: initialAuthState,
    lobby: initialLobbyState,
    session: initialSessionState,
  };

export const appReducers: ActionReducerMap<IAppState, any> = {
    auth: authenticationReducer,
    lobby: lobbyReducer,
    session: sessionReducer
  };
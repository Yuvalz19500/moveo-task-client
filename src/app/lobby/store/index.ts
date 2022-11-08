import { createFeatureSelector } from "@ngrx/store";
import { State } from "./lobby.reducer";

export const selectLobbyState = createFeatureSelector<State>('lobby');
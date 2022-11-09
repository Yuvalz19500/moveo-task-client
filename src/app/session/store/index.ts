import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./session.reducer";

export const selectSessionState = createFeatureSelector<State>('session');
import { createAction, props } from "@ngrx/store";
import { LobbyCodeBlock } from "src/app/interfaces/lobby";
import { User } from "src/app/interfaces/user";

export enum LobbyActions {
    getCodeBlocks = '[Authentication] Get Code Blocks',
    getCodeBlocksSuccess = '[Authentication] Get Code Blocks Success',
    getCodeBlocksFail = '[Authentication] Get Code Blocks Fail',

    getStudents = '[Authentication] Get Students',
    getStudentsSuccess = '[Authentication] Get Students Success',
    getStudentsFail = '[Authentication] Get Students Fail',
}

export const getCodeBlocks = createAction(LobbyActions.getCodeBlocks);
export const getCodeBlocksSuccess = createAction(LobbyActions.getCodeBlocksSuccess, props<{ payload: {codeBlocks: LobbyCodeBlock[]}}>());
export const getCodeBlocksFail = createAction(LobbyActions.getCodeBlocks);

export const getStudents = createAction(LobbyActions.getStudents);
export const getStudentsSuccess = createAction(LobbyActions.getStudentsSuccess, props<{ payload: {students: User[]}}>());
export const getStudentsFail = createAction(LobbyActions.getStudentsFail);
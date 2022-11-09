import { createAction, props } from "@ngrx/store";
import { LobbyCodeBlock } from "src/app/interfaces/lobby";
import { User } from "src/app/interfaces/user";

export enum LobbyActions {
    getCodeBlocks = '[Lobby] Get Code Blocks',
    getCodeBlocksSuccess = '[Lobby] Get Code Blocks Success',
    getCodeBlocksFail = '[Lobby] Get Code Blocks Fail',

    getStudents = '[Lobby] Get Students',
    getStudentsSuccess = '[Lobby] Get Students Success',
    getStudentsFail = '[Lobby] Get Students Fail',

    generateSessionLink = '[Lobby] Generate Session Link',
    generateSessionLinkSuccess = '[Lobby] Generate Session Link Success',
    generateSessionLinkFail = '[Lobby] Generate Session Link Fail',
}

export const getCodeBlocks = createAction(LobbyActions.getCodeBlocks);
export const getCodeBlocksSuccess = createAction(LobbyActions.getCodeBlocksSuccess, props<{ payload: {codeBlocks: LobbyCodeBlock[]}}>());
export const getCodeBlocksFail = createAction(LobbyActions.getCodeBlocks);

export const getStudents = createAction(LobbyActions.getStudents);
export const getStudentsSuccess = createAction(LobbyActions.getStudentsSuccess, props<{ payload: {students: User[]}}>());
export const getStudentsFail = createAction(LobbyActions.getStudentsFail);

export const generateSessionLink = createAction(LobbyActions.generateSessionLink, props<{ payload: {codeBlockId: number, studentId: number}}>());
export const generateSessionLinkSuccess = createAction(LobbyActions.generateSessionLinkSuccess, props<{ payload: {link: string}}>());
export const generateSessionLinkFail = createAction(LobbyActions.generateSessionLinkFail);
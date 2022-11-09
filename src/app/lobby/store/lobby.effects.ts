import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { User } from "src/app/interfaces/user";
import { LobbyService } from "../services/lobby.service";
import { generateSessionLink, generateSessionLinkFail, generateSessionLinkSuccess, getCodeBlocks, getCodeBlocksFail, getCodeBlocksSuccess, getStudents, getStudentsFail, getStudentsSuccess } from "./lobby.actions";

@Injectable()
export class LobbyEffects {
    constructor(
        private actions$: Actions, 
        private lobbyService: LobbyService
        ){}

        getStudents$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(getStudents),
                exhaustMap(() => this.lobbyService.getStudents().pipe(
                    map((response: any) => getStudentsSuccess({payload: {students: response}})),
                    catchError((error) => of(getStudentsFail()))))
                )});

        getCodeBlocks$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(getCodeBlocks),
                exhaustMap(() => this.lobbyService.getCodeBlocks().pipe(
                    map((response: any) => getCodeBlocksSuccess({payload: {codeBlocks: response}})),
                    catchError((error) => of(getCodeBlocksFail()))))
                )});

        generateSessionLink$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(generateSessionLink),
                exhaustMap((data) => this.lobbyService.generateSessionLink(data.payload.codeBlockId, data.payload.studentId).pipe(
                    map((response: any) => generateSessionLinkSuccess({payload: {link: response.link}})),
                    catchError((error) => of(generateSessionLinkFail()))
                ))
            )
        })
}
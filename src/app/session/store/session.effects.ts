import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { SessionService } from "../services/session.service";
import { getCode, getCodeFail, getCodeSuccess } from "./session.actions";

@Injectable()
export class SessionEffects {
    constructor(
        private actions$: Actions, 
        private router: Router,
        private sessionService: SessionService
        ){}

        getCode$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(getCode),
                exhaustMap((data) => this.sessionService.getCode(data.payload.codeBlockId).pipe(
                    map((response: any) => getCodeSuccess({payload: {code: response.code}})),
                    catchError((error) => of(getCodeFail()))
                ))
            )
        });
}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { User } from "src/app/interfaces/user";
import { AuthService } from "../services/auth.service";
import { AuthActions, login, loginFail, loginSuccess } from "./authentication.actions";

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private router: Router
        ){}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            exhaustMap((data) => this.authService.loginAttempt(data.payload.username, data.payload.password).pipe(
                map((response: any) => loginSuccess({payload: {user: response}})),
                catchError((error) => of(loginFail()))
            ))
        )
    });

    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((data) => {
                
            })
        )
    });
}
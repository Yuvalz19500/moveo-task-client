import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { User, UserType } from "src/app/interfaces/user";
import { AuthService } from "../services/auth.service";
import { AuthActions, login, loginFail, loginSuccess } from "./authentication.actions";

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private router: Router,
        private snackBar: MatSnackBar
        ){}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            exhaustMap((data) => this.authService.loginAttempt(data.payload.username, data.payload.password).pipe(
                map((response: any) => loginSuccess({payload: {user: response, studentId: data.payload.studentId, uuid: data.payload.uuid, codeBlockId: data.payload.codeBlockId}})),
                catchError((error) => of(loginFail()))
            ))
        )
    });

    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((data) => {
                if(!!data.payload.studentId) {
                    if(data.payload.user.id === Number(data.payload.studentId)) {
                        this.authService.userAuthenticated(data.payload.user);
                        this.router.navigate(['/session', data.payload.uuid, data.payload.studentId, data.payload.codeBlockId]);
                    } else {
                        this.snackBar.open('Login Failed! You are trying to access other user\'s session!', undefined, {duration: 3000});
                    }
                }
                else {
                    if(data.payload.user.userType === UserType.MENTOR) {
                        this.authService.userAuthenticated(data.payload.user);
                        this.router.navigate(['/lobby']);
                    } else {
                        this.snackBar.open('Login Failed! Mentor login is not meant for students!', undefined, {duration: 3000});
                    }
                }
            })
        )
    }, {dispatch: false});

    loginFail$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginFail),
            tap(() => {
                this.snackBar.open('Login Failed!', undefined, {duration: 3000});
            })
        )
    }, {dispatch: false})
}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { User } from "src/app/interfaces/user";

@Injectable()
export class LobbyEffects {
    constructor(
        private actions$: Actions, 
        private router: Router
        ){}
}
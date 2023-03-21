import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {login, loginFailure, loginSuccess} from "./user.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class UserEffects {
  loginEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      map(action => action.payload),
      exhaustMap((payload: any) =>
        this.userService.login(payload).pipe(
          map(response => loginSuccess(payload)),
          catchError(err => of(loginFailure({error: err})))
        )
      )
    )
  )

  loginSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginSuccess),
      tap(() => console.log('loggin success'))
    )
  )

  constructor(
    private readonly action$: Actions,
    private readonly userService: UserService,
  ) { }
}

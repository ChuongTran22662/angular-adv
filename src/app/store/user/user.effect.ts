import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {login, loginFailure, loginSuccess} from "./user.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {AuthenticationService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      map(action => action.payload),
      exhaustMap((payload: any) =>
        this.authenticationService.login(payload.username, payload.password).pipe(
          map(response => loginSuccess({response})),
          catchError(err => of(loginFailure({error: err})))
        )
      )
    )
  )

  loginSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(loginSuccess),
        tap((user) => {
          this.router.navigate(['/']);
          localStorage.setItem('user', JSON.stringify(user.response));
          this.authenticationService.setUserValue(user.response);
        }),
      ),
    {
      dispatch: false,
    },
  );

  constructor(
    private readonly action$: Actions,
    private readonly authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private readonly router: Router,
  ) { }
}

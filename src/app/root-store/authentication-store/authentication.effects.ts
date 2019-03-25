import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationFirebaseService } from '../../firebase/authentication/authentication-firebase.service';
import { AuthenticationActionTypes, LoginSuccessAction, LoginViaGoogleAction, LogoutAction, LogoutSuccessAction } from './authentication.actions';


@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationFirebaseService,
        private router: Router,
    ) {
    }

    @Effect()
    getUser$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoginViaGoogleAction>(AuthenticationActionTypes.LoginViaGoogle),
            switchMap(action => this.authenticationService.loginViaGoogle()
                .pipe(
                    tap(() => this.router.navigate([action.successRedirect])),
                    map(payload => new LoginSuccessAction(payload.user)),
                ),
            ));

    @Effect()
    loginViaGoogle$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoginViaGoogleAction>(AuthenticationActionTypes.LoginViaGoogle),
            switchMap(action => this.authenticationService.loginViaGoogle()
                .pipe(
                    tap(() => this.router.navigate([action.successRedirect])),
                    map(payload => new LoginSuccessAction(payload.user)),
                ),
            ));

    @Effect()
    logout$: Observable<Action> = this.actions$
        .pipe(
            ofType<LogoutAction>(AuthenticationActionTypes.Logout),
            switchMap(() => this.authenticationService.logout()
                .pipe(
                    map(() => new LogoutSuccessAction()),
                ),
            ));
}

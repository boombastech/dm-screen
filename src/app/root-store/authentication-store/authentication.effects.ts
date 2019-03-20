import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationFirebaseService } from '../../firebase/authentication/authentication-firebase.service';
import { AuthenticationActionTypes, LoginSuccessAction, LoginViaGoogleAction,
    LogoutAction, LogoutSuccessAction } from './authentication.actions';


@Injectable()
export class AuthenticationEffects {

    constructor(private actions$: Actions, private authenticationService: AuthenticationFirebaseService) {
    }

    @Effect()
    loginViaGoogle$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoginViaGoogleAction>(AuthenticationActionTypes.LoginViaGoogle),
            switchMap(() => this.authenticationService.loginViaGoogle()
                .pipe(
                    map(payload => new LoginSuccessAction(payload)),
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

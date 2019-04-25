import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { FirebaseAuthenticationService } from '../../firebase/authentication/firebase-authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { LoadMapsAction } from '../../maps/store/map.actions';
import { LoadMarkersAction } from '../../markers/marker-store/marker.actions';
import { User } from '../models/user';
import { AuthenticationActionTypes, AuthenticationErrorAction, LoadUserAction, LoadUserDetailsAction, LoadUserDetailsSuccessAction, LoadUserSuccessAction, LoginSuccessAction, LoginViaFacebookAction, LoginViaGoogleAction, LogoutAction, LogoutSuccessAction } from './authentication.actions';


@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions$: Actions,
        private authenticationService: FirebaseAuthenticationService,
        private firestoreService: FirebaseFirestoreService,
    ) {
    }

    @Effect()
    loadUserAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadUserAction>(AuthenticationActionTypes.LoadUser),
            switchMap(() => this.authenticationService.getAuthState()
                .pipe(
                    switchMap(user => [
                        new LoadUserSuccessAction(!!user),
                        new LoadUserDetailsAction(user ? user.uid : ''),
                    ]),
                    catchError(() => of(new AuthenticationErrorAction())),
                ),
            ));

    @Effect()
    loadUserDetailsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadUserDetailsAction>(AuthenticationActionTypes.LoadUserDetails),
            filter(action => action.uid !== ''),
            switchMap(action => this.firestoreService.getDocument<User>('users', action.uid)
                .pipe(
                    switchMap(user => [
                        new LoadUserDetailsSuccessAction(user),
                        new LoadMapsAction(),
                        new LoadMarkersAction(),
                    ]),
                    catchError(() => of(new AuthenticationErrorAction())),
                ),
            ));

    @Effect()
    loginViaGoogle$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoginViaGoogleAction>(AuthenticationActionTypes.LoginViaGoogle),
            switchMap(() => this.authenticationService.loginViaGoogle()
                .pipe(
                    map(() => new LoginSuccessAction()),
                    catchError(() => of(new AuthenticationErrorAction())),
                ),
            ));

    @Effect()
    loginViaFacebook$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoginViaFacebookAction>(AuthenticationActionTypes.LoginViaFacebook),
            switchMap(() => this.authenticationService.loginViaFacebook()
                .pipe(
                    map(() => new LoginSuccessAction()),
                    catchError(() => of(new AuthenticationErrorAction())),
                ),
            ));

    @Effect()
    logout$: Observable<Action> = this.actions$
        .pipe(
            ofType<LogoutAction>(AuthenticationActionTypes.Logout),
            switchMap(() => this.authenticationService.logout()
                .pipe(
                    map(() => new LogoutSuccessAction()),
                    catchError(() => of(new AuthenticationErrorAction())),
                ),
            ));
}

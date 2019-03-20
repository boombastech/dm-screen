import { Action } from '@ngrx/store';
import UserCredential = firebase.auth.UserCredential;

export enum AuthenticationActionTypes {
    LoginViaFacebook = 'LoginViaFacebook',
    LoginViaGoogle = 'LoginViaGoogle',
    LoginSuccess = 'LoginSuccess',
    Logout = 'Logout',
    LogoutSuccess = 'LogoutSuccess',
}

export class LoginViaFacebookAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaFacebook;
}

export class LoginViaGoogleAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaGoogle;
}

export class LoginSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LoginSuccess;

    constructor(
        public userCredential: UserCredential,
    ) {
    }
}

export class LogoutAction implements Action {
    readonly type = AuthenticationActionTypes.Logout;
}

export class LogoutSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LogoutSuccess;
}

export type AuthenticationAction =
    | LoginViaGoogleAction
    | LoginViaFacebookAction
    | LoginSuccessAction
    | LogoutAction
    | LogoutSuccessAction
    ;

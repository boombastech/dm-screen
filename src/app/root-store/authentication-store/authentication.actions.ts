import { Action } from '@ngrx/store';
import { User } from 'firebase';

export enum AuthenticationActionTypes {
    LoginViaFacebook = 'LoginViaFacebook',
    LoginViaGoogle = 'LoginViaGoogle',
    LoginSuccess = 'LoginSuccess',
    Logout = 'Logout',
    LogoutSuccess = 'LogoutSuccess',
    WatchUserAction = 'WatchUserAction',
}

export class LoginViaFacebookAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaFacebook;

    constructor(
        public successRedirect: string,
    ) {
    }
}

export class WatchUserAction implements Action {
    readonly type = AuthenticationActionTypes.WatchUserAction;
}

export class LoginViaGoogleAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaGoogle;

    constructor(
        public successRedirect: string,
    ) {
    }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LoginSuccess;

    constructor(
        public user: User,
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
    | WatchUserAction
    ;

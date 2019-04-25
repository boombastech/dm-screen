import { Action } from '@ngrx/store';
import { User } from '../models/user';

export enum AuthenticationActionTypes {
    LoadUser = 'LoadUser',
    LoadUserSuccess = 'LoadUserSuccess',
    LoadUserDetails = 'LoadUserDetails',
    LoadUserDetailsSuccess = 'LoadUserDetailsSuccess',
    LoginViaFacebook = 'LoginViaFacebook',
    LoginViaGoogle = 'LoginViaGoogle',
    LoginSuccess = 'LoginSuccess',
    Logout = 'Logout',
    LogoutSuccess = 'LogoutSuccess',
    AuthenticationError = 'AuthenticationError',
}

export class LoadUserAction implements Action {
    readonly type = AuthenticationActionTypes.LoadUser;
}

export class LoadUserSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LoadUserSuccess;

    constructor(
        public isAuthenticated: boolean,
    ) {
    }
}

export class LoadUserDetailsAction implements Action {
    readonly type = AuthenticationActionTypes.LoadUserDetails;

    constructor(
        public uid: string,
    ) {
    }
}

export class LoadUserDetailsSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LoadUserDetailsSuccess;

    constructor(
        public user: User,
    ) {
    }
}

export class LoginViaFacebookAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaFacebook;
}

export class LoginViaGoogleAction implements Action {
    readonly type = AuthenticationActionTypes.LoginViaGoogle;
}

export class LoginSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LoginSuccess;
}

export class LogoutAction implements Action {
    readonly type = AuthenticationActionTypes.Logout;
}

export class LogoutSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.LogoutSuccess;
}

export class AuthenticationErrorAction implements Action {
    readonly type = AuthenticationActionTypes.AuthenticationError;
}

export type AuthenticationAction =
    | LoadUserAction
    | LoadUserSuccessAction
    | LoadUserDetailsAction
    | LoadUserDetailsSuccessAction
    | LoginViaGoogleAction
    | LoginViaFacebookAction
    | LoginSuccessAction
    | LogoutAction
    | LogoutSuccessAction
    | AuthenticationErrorAction
    ;

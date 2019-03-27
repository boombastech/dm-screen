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
    WatchUser = 'WatchUser',
    WatchUserSuccess = 'WatchUserSuccess',
    WatchUserFailure = 'WatchUserFailure',
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

export class WatchUserAction implements Action {
    readonly type = AuthenticationActionTypes.WatchUser;
}

export class WatchUserSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.WatchUserSuccess;

    constructor(
        public user: User,
    ) {
    }
}

export class WatchUserFailureAction implements Action {
    readonly type = AuthenticationActionTypes.WatchUserFailure;
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

export type AuthenticationAction =
    | LoadUserAction
    | LoadUserSuccessAction
    | LoginViaGoogleAction
    | LoginViaFacebookAction
    | LoginSuccessAction
    | LogoutAction
    | LogoutSuccessAction
    | WatchUserAction
    | WatchUserSuccessAction
    | WatchUserFailureAction
    ;

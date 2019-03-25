import { createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication-state';
import { AuthenticationAction, AuthenticationActionTypes } from './authentication.actions';

export const selectUser = createFeatureSelector<AuthenticationState>('authentication');

export function authenticationReducer(state = { isLoggedIn: false }, action: AuthenticationAction): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LoginSuccess: {
            return { isLoggedIn: true, activeUser: action.userCredential.user };
        }

        case AuthenticationActionTypes.LogoutSuccess: {
            return { isLoggedIn: false };
        }

        default: {
            return state;
        }
    }
}

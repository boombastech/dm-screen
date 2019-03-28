import { createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication-state';
import { AuthenticationAction, AuthenticationActionTypes } from './authentication.actions';

export const selectUser = createFeatureSelector<AuthenticationState>('authentication');

export function authenticationReducer(state = { isLoggedIn: false }, action: AuthenticationAction): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LoadUserSuccess: {
            return { isLoggedIn: action.isAuthenticated };
        }

        case AuthenticationActionTypes.LoadUserDetailsSuccess: {
            return { isLoggedIn: true, activeUser: action.user };
        }

        default: {
            return state;
        }
    }
}

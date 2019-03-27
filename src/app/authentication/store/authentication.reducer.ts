import { createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication-state';
import { AuthenticationAction, AuthenticationActionTypes } from './authentication.actions';

export const selectUser = createFeatureSelector<AuthenticationState>('authentication');

export function authenticationReducer(state = { isLoggedIn: false }, action: AuthenticationAction): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LoadUserSuccess: {
            return { isLoggedIn: action.isAuthenticated };
        }

        case AuthenticationActionTypes.WatchUserFailure: {
            return { isLoggedIn: false };
        }

        default: {
            return state;
        }
    }
}

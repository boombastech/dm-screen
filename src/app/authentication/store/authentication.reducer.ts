import { createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication-state';
import { AuthenticationAction, AuthenticationActionTypes, AuthenticationErrorAction } from './authentication.actions';

export const selectUser = createFeatureSelector<AuthenticationState>('authentication');

const initialState: AuthenticationState = {
    isLoggedIn: false,
    isLoaded: false,
    isLoading: false,
    isError: false,
};

export function authenticationReducer(state = initialState, action: AuthenticationAction): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LoadUserSuccess: {
            return {
                isLoggedIn: action.isAuthenticated,
                isLoading: false,
                isLoaded: true,
                isError: false,
            };
        }

        case AuthenticationActionTypes.LoadUserDetailsSuccess: {
            return {
                activeUser: action.user,
                isLoggedIn: true,
                isLoading: false,
                isLoaded: true,
                isError: false,
            };
        }

        case AuthenticationActionTypes.LoadUserDetails:
        case AuthenticationActionTypes.LoadUser:
        case AuthenticationActionTypes.LoginViaGoogle:
        case AuthenticationActionTypes.LoginViaFacebook: {
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
            };
        }

        case AuthenticationActionTypes.AuthenticationError: {
            return {
                activeUser: undefined,
                isLoggedIn: false,
                isLoaded: false,
                isLoading: false,
                isError: true,
            };
        }

        default: {
            return state;
        }
    }
}

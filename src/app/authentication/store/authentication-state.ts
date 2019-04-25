import { User } from '../models/user';

export interface AuthenticationState {
    activeUser?: User;
    isLoggedIn: boolean;
    isLoaded: boolean;
    isLoading: boolean;
    isError: boolean;
}

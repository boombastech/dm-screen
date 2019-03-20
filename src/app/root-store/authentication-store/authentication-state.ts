import { User } from 'firebase';

export interface AuthenticationState {
    isLoggedIn: boolean;
    activeUser?: User;
}


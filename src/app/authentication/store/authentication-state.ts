import { User } from '../models/user';

export interface AuthenticationState {
    isLoggedIn: boolean;
    activeUser?: User;
}

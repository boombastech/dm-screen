import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthenticationState } from '../store/authentication-state';
import { LoginViaFacebookAction, LoginViaGoogleAction, LogoutAction } from '../store/authentication.actions';
import { selectUser } from '../store/authentication.reducer';

@Injectable()
export class AuthenticationService {

    private userStateObservable: Observable<AuthenticationState>;

    constructor(private store: Store<any>) {
        this.userStateObservable = this.store.select(selectUser);
    }

    loginViaGoogle() {
        this.store.dispatch(new LoginViaGoogleAction());
    }

    loginViaFacebook() {
        this.store.dispatch(new LoginViaFacebookAction());
    }

    logout() {
        this.store.dispatch(new LogoutAction());
    }

    isLoggedIn(): Observable<boolean> {
        return this.userStateObservable.pipe(
            map(state => state.isLoggedIn),
        );
    }

    getUser(): Observable<User | undefined> {
        return this.userStateObservable.pipe(
            map(state => state.activeUser),
        );
    }
}

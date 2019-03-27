import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationState } from '../store/authentication-state';
import { LoginViaFacebookAction, LoginViaGoogleAction, LogoutAction } from '../store/authentication.actions';
import { selectUser } from '../store/authentication.reducer';

@Injectable()
export class AuthenticationService {

    constructor(private store: Store<any>) {
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

    getUser(): Observable<AuthenticationState> {
        return this.store.select(selectUser);
    }
}

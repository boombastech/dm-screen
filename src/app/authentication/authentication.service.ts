import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationState } from '../root-store/authentication-store/authentication-state';
import { LoginViaGoogleAction, LogoutAction } from '../root-store/authentication-store/authentication.actions';
import { selectUser } from '../root-store/authentication-store/authentication.reducer';

@Injectable()
export class AuthenticationService {

    constructor(private store: Store<any>) {
    }

    loginViaGoogle() {
        this.store.dispatch(new LoginViaGoogleAction());
    }

    logout() {
        this.store.dispatch(new LogoutAction());
    }

    getUser(): Observable<AuthenticationState> {
        return this.store.select(selectUser);
    }
}

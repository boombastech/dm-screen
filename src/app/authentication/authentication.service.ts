import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationState } from '../root-store/authentication-store/authentication-state';
import { LoginViaGoogleAction, LogoutAction, WatchUserAction } from '../root-store/authentication-store/authentication.actions';
import { selectUser } from '../root-store/authentication-store/authentication.reducer';

@Injectable()
export class AuthenticationService {

    constructor(private store: Store<any>) {
    }

    loginViaGoogle(successRedirectUrl: string = '/') {
        this.store.dispatch(new LoginViaGoogleAction(successRedirectUrl));
    }

    logout() {
        this.store.dispatch(new LogoutAction());
    }

    triggerUserLoad(): Observable<AuthenticationState> {
        this.store.dispatch(new WatchUserAction());
        return this.getUser();
    }

    getUser(): Observable<AuthenticationState> {
        return this.store.select(selectUser).pipe(
        );
    }
}

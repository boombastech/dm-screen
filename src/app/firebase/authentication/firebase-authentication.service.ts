import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { WatchUserFailureAction, WatchUserSuccessAction } from '../../authentication/store/authentication.actions';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class FirebaseAuthenticationService {

    constructor(
        private authentication: AngularFireAuth,
        private store: Store<any>,
    ) {
        this.authentication.user.subscribe(user => {
            if (user) {
                this.store.dispatch(new WatchUserSuccessAction({ id: user.uid, displayName: user.displayName }));
            } else {
                this.store.dispatch(new WatchUserFailureAction());
            }
        });
    }

    getAuthState(): Observable<User | null> {
        return this.authentication.user;
    }

    loginViaGoogle(): Observable<UserCredential> {
        return fromPromise(this.authentication.auth.signInWithPopup(new auth.GoogleAuthProvider()));
    }

    logout(): Observable<void> {
        return fromPromise(this.authentication.auth.signOut());
    }

    loginViaFacebook(): Observable<UserCredential> {
        return fromPromise(this.authentication.auth.signInWithPopup(new auth.FacebookAuthProvider()));
    }
}

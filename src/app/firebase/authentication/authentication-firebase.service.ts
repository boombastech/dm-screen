import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthenticationFirebaseService {

    constructor(
        private authentication: AngularFireAuth,
    ) {
    }

    loginViaGoogle(): Observable<UserCredential> {
        return fromPromise(this.authentication.auth.signInWithPopup(new auth.GoogleAuthProvider()));
    }

    logout(): Observable<void> {
        return fromPromise(this.authentication.auth.signOut());
    }
}

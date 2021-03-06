import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/services/authentication.service';
import { AuthenticationState } from './authentication/store/authentication-state';
import { LoadUserAction } from './authentication/store/authentication.actions';
import { FirebaseFirestoreService } from './firebase/firestore/firebase-firestore.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    user$: Observable<AuthenticationState>;

    constructor(
        private authenticationService: AuthenticationService,
        private firestore: FirebaseFirestoreService,
        private store: Store<any>,
    ) {
    }

    logout() {
        this.authenticationService.logout();
    }

    ngOnInit(): void {
        this.store.dispatch(new LoadUserAction());
    }
}

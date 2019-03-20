import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginViaGoogleAction, LogoutAction } from './root-store/authentication-store/authentication.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'dm-screen';

    constructor(
        private authService: Store<any>,
    ) {
    }

    login() {
        this.authService.dispatch(new LoginViaGoogleAction());
    }

    logout() {
        this.authService.dispatch(new LogoutAction());
    }

    ngOnInit(): void {
    }
}

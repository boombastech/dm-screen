import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationState } from './root-store/authentication-store/authentication-state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private user$: Observable<AuthenticationState>;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
    }

    logout() {
        this.authenticationService.logout();
    }

    ngOnInit(): void {
        this.user$ = this.authenticationService.getUser();
    }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { AuthenticationState } from '../../../authentication/store/authentication-state';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    showMenu = false;

    authenticationState$: Observable<AuthenticationState>;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
    }

    logout() {
        this.authenticationService.logout();
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    ngOnInit(): void {
        this.authenticationState$ = this.authenticationService.getUser();
    }
}

import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { AuthenticationState } from '../../../root-store/authentication-store/authentication-state';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {

    showMenu = false;

    @Input()
    authenticationState: AuthenticationState;

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
}

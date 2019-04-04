import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../authentication/models/user';
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    showMenu = false;

    user$: Observable<User>;

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
        this.user$ = this.authenticationService.getUser();
    }

    loginViaGoogle() {
        this.authenticationService.loginViaGoogle();
    }

    loginViaFacebook() {
        this.authenticationService.loginViaFacebook();
    }
}

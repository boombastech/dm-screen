import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent {

    constructor(
        private authenticationService: AuthenticationService,
    ) {
    }

    loginViaGoogle() {
        this.authenticationService.loginViaGoogle();
    }
}

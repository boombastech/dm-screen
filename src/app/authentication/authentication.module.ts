import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        AuthenticationService,
    ],
})
export class AuthenticationModule {
}

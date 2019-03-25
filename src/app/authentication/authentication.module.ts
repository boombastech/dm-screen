import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';

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

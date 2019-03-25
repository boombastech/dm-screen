import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../../authentication/authentication.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationModule,
    ],
    exports: [
        NavbarComponent,
    ],
})
export class NavbarModule {
}

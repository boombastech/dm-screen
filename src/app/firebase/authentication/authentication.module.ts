import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationFirebaseService } from './authentication-firebase.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireAuthModule,
    ],
    providers: [
        AuthenticationFirebaseService,
    ],
})
export class AuthenticationModule {
}

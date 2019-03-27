import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseAuthenticationService } from './firebase-authentication.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireAuthModule,
    ],
    providers: [
        FirebaseAuthenticationService,
    ],
})
export class FirebaseAuthenticationModule {
}

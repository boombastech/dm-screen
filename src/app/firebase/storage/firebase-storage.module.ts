import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseStorageService } from './firebase-storage.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireStorageModule,
    ],
    providers: [
        FirebaseStorageService,
    ],
})
export class FirebaseStorageModule {
}

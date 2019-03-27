import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseFirestoreService } from './firebase-firestore.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFirestoreModule,
    ],
    providers: [
        FirebaseFirestoreService,
    ],
})
export class FirebaseFirestoreModule {
}

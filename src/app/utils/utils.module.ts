import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirebaseFirestoreModule } from '../firebase/firestore/firebase-firestore.module';
import { IdGeneratorService } from './services/id-generator.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseFirestoreModule,
    ],
    providers: [
        IdGeneratorService,
    ],
})
export class UtilsModule {
}

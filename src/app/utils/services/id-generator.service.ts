import { Injectable } from '@angular/core';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';

@Injectable({
    providedIn: 'root',
})
export class IdGeneratorService {

    constructor(
        private firebaseFirestoreService: FirebaseFirestoreService,
    ) {
    }

    getId(): string {
        return this.firebaseFirestoreService.createId();
    }
}

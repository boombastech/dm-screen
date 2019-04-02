import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class FirebaseFirestoreService {

    constructor(
        private angularFirestore: AngularFirestore,
    ) {
    }

    createId(): string {
        return this.angularFirestore.createId();
    }

    save(path: string, id: string = this.createId(), value: any): Observable<void> {
        return fromPromise(this.angularFirestore.collection(path).doc(id).set(value));
    }

    delete(path: string, id: string): Observable<void> {
        return fromPromise(this.angularFirestore.collection(path).doc(id).delete());
    }

    getDocument<T>(collection: string, documentId: string): Observable<T> {
        return this.angularFirestore.collection<T>(collection).doc<T>(documentId).valueChanges();
    }

    getCollection<T>(collection: string): Observable<T[]> {
        return this.angularFirestore.collection<T>(collection).valueChanges();
    }
}

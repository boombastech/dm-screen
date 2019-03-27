import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable()
export class FirebaseStorageService {

    constructor(
        private firebaseStorage: AngularFireStorage,
    ) {
    }

    upload(path: string, file: File): AngularFireUploadTask {
        console.log(path);
        return this.firebaseStorage.upload(path, file);
    }
}

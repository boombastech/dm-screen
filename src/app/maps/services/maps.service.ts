import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseStorageService } from '../../firebase/storage/firebase-storage.service';
import { MapInfo } from '../models/map';

@Injectable()
export class MapsService {

    constructor(
        private firebaseStorageService: FirebaseStorageService,
        private authenticationService: AuthenticationService,
    ) {
    }

    upload(file: File): Observable<AngularFireUploadTask> {
        return this.authenticationService.getUser().pipe(
            map(userState => this.firebaseStorageService.upload('/images/' + userState.activeUser.id + '/' + file.name, file)),
        );
    }

    save(map: MapInfo) {

    }
}

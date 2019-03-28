import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseStorageService } from '../../firebase/storage/firebase-storage.service';
import { MapInfo } from '../models/map';
import { selectMapById, selectMaps } from '../store/map.reducer';

@Injectable()
export class MapsService {

    constructor(
        private firebaseStorageService: FirebaseStorageService,
        private authenticationService: AuthenticationService,
        private store: Store<any>,
    ) {
    }

    upload(file: File): Observable<AngularFireUploadTask> {
        return this.authenticationService.getUser().pipe(
            map(userState => this.firebaseStorageService.upload('/images/' + userState.activeUser.id + '/' + file.name, file)),
        );
    }

    getAll(): Observable<MapInfo[]> {
        return this.store.select(selectMaps).pipe(
            map(state => state.maps),
        );
    }

    getById(id: string): Observable<MapInfo> {
        return this.store.select(selectMapById(id));
    }
}

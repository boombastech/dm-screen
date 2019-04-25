import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { FirebaseStorageService } from '../../firebase/storage/firebase-storage.service';
import { DeleteMapAction, SaveMapAction } from '../store/map.actions';
import { selectMapById, selectMaps } from '../store/map.reducer';
import { MapInfo } from '../models/map';

@Injectable()
export class MapService {

    constructor(
        private firebaseStorageService: FirebaseStorageService,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
        private store: Store<any>,
    ) {
    }

    createId(): string {
        return this.firebaseFirestoreService.createId();
    }

    upload(file: File, name: string): Observable<AngularFireUploadTask> {
        return this.authenticationService.getUser().pipe(
            map(user => this.firebaseStorageService.upload(`/images/${user.id}/${name}`, file)),
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

    save(mapInfo: MapInfo): Observable<MapInfo> {
        this.store.dispatch(new SaveMapAction(mapInfo));
        return this.getById(mapInfo.id);
    }

    delete(mapInfo: MapInfo): Observable<MapInfo> {
        this.store.dispatch(new DeleteMapAction(mapInfo));
        return this.getById(mapInfo.id);
    }
}

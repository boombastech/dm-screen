import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { MapInfo } from '../../maps/models/map';
import { DeleteMapAction, SaveMapAction } from '../../maps/store/map.actions';
import { selectMapById, selectMaps } from '../../maps/store/map.reducer';
import { LocationInfo } from '../models/location-info';
import { DeleteLocationAction, SaveLocationAction } from '../store/location.actions';
import { selectLocationById, selectLocations } from '../store/location.reducer';

@Injectable()
export class LocationService {

    constructor(
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
        private store: Store<any>,
    ) {
    }

    getAll(): Observable<LocationInfo[]> {
        return this.store.select(selectLocations).pipe(
            map(state => state.locations),
        );
    }

    getById(id: string): Observable<LocationInfo> {
        return this.store.select(selectLocationById(id));
    }

    save(locationInfo: LocationInfo): Observable<LocationInfo> {
        this.store.dispatch(new SaveLocationAction(locationInfo));
        return this.getById(locationInfo.id);
    }

    delete(locationInfo: LocationInfo): Observable<LocationInfo> {
        this.store.dispatch(new DeleteLocationAction(locationInfo));
        return this.getById(locationInfo.id);
    }
}

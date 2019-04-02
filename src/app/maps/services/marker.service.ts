import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { SaveMarkerAction } from '../marker-store/marker.actions';
import { selectMarkerByMapId, selectMarkers } from '../marker-store/marker.reducer';
import { Marker } from '../models/marker';

@Injectable()
export class MarkerService {
    private markers: Observable<Marker[]>;

    constructor(
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
        private store: Store<any>,
    ) {
        this.markers = this.store.select(selectMarkers).pipe(
            map(state => state.markers),
        );
    }

    createId(): string {
        return this.firebaseFirestoreService.createId();
    }

    getAll(mapId?: string): Observable<Marker[]> {
        return this.markers.pipe(
            map(markers => {
                if (mapId) {
                    return markers.filter(marker => marker.mapId === mapId);
                }
                return markers;
            }),
        );
    }

    getById(id: string): Observable<Marker> {
        return this.store.select(selectMarkerByMapId(id));
    }

    save(marker: Marker): Observable<Marker> {
        if (!marker.id) {
            marker.id = this.createId();
        }

        this.store.dispatch(new SaveMarkerAction(marker));
        return this.getById(marker.id);
    }
}

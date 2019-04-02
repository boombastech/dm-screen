import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { MarkerState } from '../marker-store/marker-state';
import { SaveMarkerAction } from '../marker-store/marker.actions';
import { selectMarkerByMapId, selectMarkers } from '../marker-store/marker.reducer';
import { WayPoint } from '../models/waypoint';

@Injectable()
export class MarkerService {
    private markers: Observable<WayPoint[]>;

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

    getAll(mapId?: string): Observable<WayPoint[]> {
        return this.markers.pipe(
            map(markers => {
                if (mapId) {
                    return markers.filter(marker => marker.mapId === mapId);
                }
                return markers;
            }),
        );
    }

    getById(id: string): Observable<WayPoint> {
        return this.store.select(selectMarkerByMapId(id));
    }

    save(marker: WayPoint): Observable<WayPoint> {
        if (!marker.id) {
            marker.id = this.createId();
        }

        this.store.dispatch(new SaveMarkerAction(marker));
        return this.getById(marker.id);
    }
}

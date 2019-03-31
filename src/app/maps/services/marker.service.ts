import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { selectMapById, selectMaps } from '../map-store/map.reducer';
import { MapInfo } from '../models/map';
import { WayPoint } from '../models/waypoint';

@Injectable()
export class MarkerService {

    constructor(
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
        private store: Store<any>,
    ) {
    }

    createId(): string {
        return this.firebaseFirestoreService.createId();
    }

    getAll(): Observable<MapInfo[]> {
        return this.store.select(selectMaps).pipe(
            map(state => state.maps),
        );
    }

    getById(id: string): Observable<MapInfo> {
        return this.store.select(selectMapById(id));
    }

    save(marker: WayPoint, userId: string): Observable<WayPoint> {
        if (!marker.id) {
            marker.id = this.createId();
        }
        console.log('saving');

        return this.firebaseFirestoreService.save('/users/' + userId + '/marker', marker.id, marker).pipe(
            map(() => marker),
        );

        // return this.authenticationService.getUser().pipe(
        //     map(userState => this.firebaseFirestoreService.save('/users/' + userState.activeUser.id + '/marker', marker.id, marker)),
        //     map(() => marker),
        // );
    }

    private getWaypointPath(userId: string): string {
        return `/users/${userId}/markers`;
    }
}

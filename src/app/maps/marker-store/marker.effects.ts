import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { WayPoint } from '../models/waypoint';
import { LoadMarkersAction, LoadMarkersSuccessAction, MarkersActionTypes } from './marker.actions';

@Injectable()
export class MarkerEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
    ) {
    }

    @Effect()
    loadMarkersAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadMarkersAction>(MarkersActionTypes.LoadMarkers),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<WayPoint>(`users/${user.id}/markers`)
                .pipe(
                    map(payload => new LoadMarkersSuccessAction(payload)),
                ),
            ));
}

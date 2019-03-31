import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { WayPoint } from '../models/waypoint';
import { LoadMarkersAction, LoadMarkersSuccessAction, MarkersActionTypes } from './marker.actions';

@Injectable()
export class MarkerEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
    ) {
    }

    @Effect()
    loadMapsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadMarkersAction>(MarkersActionTypes.LoadMarkers),
            switchMap(action => this.firebaseFirestoreService.getCollection<WayPoint>(`users/${action.userId}/markers`)
                .pipe(
                    map(payload => new LoadMarkersSuccessAction(payload)),
                ),
            ));
}

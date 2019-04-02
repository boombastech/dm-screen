import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { Marker } from '../models/marker';
import { DeleteMarkerAction, DeleteMarkerSuccessAction, LoadMarkersAction, LoadMarkersSuccessAction, MarkersActionTypes, SaveMarkerAction, SaveMarkerSuccessAction } from './marker.actions';

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
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<Marker>(`users/${user.id}/markers`)
                .pipe(
                    map(payload => new LoadMarkersSuccessAction(payload)),
                ),
            ));

    @Effect()
    saveMarkerAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<SaveMarkerAction>(MarkersActionTypes.SaveMarker),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.save(`users/${user.id}/markers`, action.marker.id, action.marker)
                .pipe(
                    map(() => new SaveMarkerSuccessAction()),
                ),
            ));

    @Effect()
    deleteMarkerAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<DeleteMarkerAction>(MarkersActionTypes.DeleteMarker),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.delete(`users/${user.id}/markers`, action.marker.id)
                .pipe(
                    map(() => new DeleteMarkerSuccessAction()),
                ),
            ));
}

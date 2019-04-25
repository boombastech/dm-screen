import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { LocationInfo } from '../models/location-info';
import { DeleteLocationAction, DeleteLocationSuccessAction, LoadLocationsAction, LoadLocationsSuccessAction, LocationActionTypes, SaveLocationAction, SaveLocationSuccessAction } from './location.actions';


@Injectable()
export class LocationEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
    ) {
    }

    @Effect()
    loadLocationsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadLocationsAction>(LocationActionTypes.LoadLocations),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<LocationInfo>(`users/${user.id}/locations`)
                .pipe(
                    map(payload => new LoadLocationsSuccessAction(payload)),
                ),
            ));

    @Effect()
    saveLocationAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<SaveLocationAction>(LocationActionTypes.SaveLocation),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.save(`users/${user.id}/locations`, action.location.id, action.location)
                .pipe(
                    map(() => new SaveLocationSuccessAction()),
                ),
            ));

    @Effect()
    deleteLocationAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<DeleteLocationAction>(LocationActionTypes.DeleteLocation),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.delete(`users/${user.id}/locations`, action.location.id)
                .pipe(
                    map(() => new DeleteLocationSuccessAction()),
                ),
            ));
}

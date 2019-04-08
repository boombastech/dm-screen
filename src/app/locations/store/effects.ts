import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { FirebaseStorageService } from '../../firebase/storage/firebase-storage.service';
import { LocationInfo } from '../model/location';
import { LoadLocationsAction, LoadLocationsSuccessAction, LocationsActionTypes } from './actions';

@Injectable()
export class LocationEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private firebaseStorageService: FirebaseStorageService,
        private authenticationService: AuthenticationService,
    ) {
    }

    @Effect()
    loadLocationsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadLocationsAction>(LocationsActionTypes.LoadLocations),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<LocationInfo>(`users/${user.id}/locations`)
                .pipe(
                    map(payload => new LoadLocationsSuccessAction(payload)),
                ),
            ));
}

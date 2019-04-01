import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { selectUser } from '../../authentication/store/authentication.reducer';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { MapInfo } from '../models/map';
import { LoadMapsAction, LoadMapsSuccessAction, MapActionTypes } from './map.actions';

@Injectable()
export class MapEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
    ) {
    }

    @Effect()
    loadMapsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadMapsAction>(MapActionTypes.LoadMaps),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<MapInfo>(`users/${user.id}/maps`)
                .pipe(
                    map(payload => new LoadMapsSuccessAction(payload)),
                ),
            ));
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { MapInfo } from '../models/map';
import { LoadMapsAction, LoadMapsSuccessAction, MapActionTypes } from './map.actions';

@Injectable()
export class MapEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService
    ) {
    }

    @Effect()
    loadMapsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadMapsAction>(MapActionTypes.LoadMaps),
            switchMap(action => this.firebaseFirestoreService.getCollection<MapInfo>('users/' + action.uid + '/maps')
                .pipe(
                    map(payload => new LoadMapsSuccessAction(payload)),
                ),
            ));
}

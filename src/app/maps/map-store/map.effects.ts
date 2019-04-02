import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { FirebaseStorageService } from '../../firebase/storage/firebase-storage.service';
import { MapInfo } from '../models/map';
import { DeleteMapAction, LoadMapsAction, LoadMapsSuccessAction, MapActionTypes, SaveMapAction, SaveMapSuccessAction } from './map.actions';

@Injectable()
export class MapEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private firebaseStorageService: FirebaseStorageService,
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

    @Effect()
    saveMapAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<SaveMapAction>(MapActionTypes.SaveMap),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.save(`users/${user.id}/maps`, action.mapInfo.id, action.mapInfo)
                .pipe(
                    map(() => new SaveMapSuccessAction()),
                ),
            ));

    @Effect()
    deleteMapAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<DeleteMapAction>(MapActionTypes.DeleteMap),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.delete(`users/${user.id}/maps`, action.mapInfo.id)
                .pipe(
                    map(() => new SaveMapSuccessAction()),
                ),
            ));
}

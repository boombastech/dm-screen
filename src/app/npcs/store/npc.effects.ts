import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FirebaseFirestoreService } from '../../firebase/firestore/firebase-firestore.service';
import { Npc } from '../models/npc';
import { DeleteNpcAction, DeleteNpcSuccessAction, LoadNpcsAction, LoadNpcsSuccessAction, NpcActionTypes, NpcErrorAction, SaveNpcAction, SaveNpcSuccessAction } from './npc.actions';

@Injectable()
export class NpcEffects {

    constructor(
        private actions$: Actions,
        private firebaseFirestoreService: FirebaseFirestoreService,
        private authenticationService: AuthenticationService,
    ) {
    }

    @Effect()
    loadNpcsAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadNpcsAction>(NpcActionTypes.LoadNpcs),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.getCollection<Npc>(`users/${user.id}/npcs`)
                .pipe(
                    map(payload => new LoadNpcsSuccessAction(payload)),
                    catchError(() => of(new NpcErrorAction())),
                ),
            ));

    @Effect()
    saveNpcAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<SaveNpcAction>(NpcActionTypes.SaveNpc),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.save(`users/${user.id}/npcs`, action.npc.id, action.npc)
                .pipe(
                    map(() => new SaveNpcSuccessAction()),
                    catchError(() => of(new NpcErrorAction())),
                ),
            ));

    @Effect()
    deleteNpcAction$: Observable<Action> = this.actions$
        .pipe(
            ofType<DeleteNpcAction>(NpcActionTypes.DeleteNpc),
            withLatestFrom(this.authenticationService.getUser()),
            switchMap(([action, user]) => this.firebaseFirestoreService.delete(`users/${user.id}/npcs`, action.npc.id)
                .pipe(
                    map(() => new DeleteNpcSuccessAction()),
                    catchError(() => of(new NpcErrorAction())),
                ),
            ));
}

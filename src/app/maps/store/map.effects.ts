import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class MapEffects {

    constructor(
        private actions$: Actions,
    ) {
    }

    // @Effect()
    // watchUserAction$: Observable<Action> = this.actions$
    //     .pipe(
    //         ofType<WatchUserAction>(MapActionTypes.WatchUserAction),
    //         switchMap(() => this.authenticationService.getAuthState()
    //             .pipe(
    //                 map(payload => new LoginSuccessAction(payload)),
    //             ),
    //         ));
}
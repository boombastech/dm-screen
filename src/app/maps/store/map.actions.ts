import { Action } from '@ngrx/store';

export enum MapActionTypes {
    WatchUserAction = 'WatchUserAction',
}

export class WatchUserAction implements Action {
    readonly type = MapActionTypes.WatchUserAction;
}

export type MapAction =
    | WatchUserAction
    ;

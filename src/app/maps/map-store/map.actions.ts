import { Action } from '@ngrx/store';
import { MapInfo } from '../models/map';

export enum MapActionTypes {
    LoadMaps = 'LoadMaps',
    LoadMapsSuccess = 'LoadMapsSuccess',
}

export class LoadMapsAction implements Action {
    readonly type = MapActionTypes.LoadMaps;
}

export class LoadMapsSuccessAction implements Action {
    readonly type = MapActionTypes.LoadMapsSuccess;

    constructor(
        public maps: MapInfo[],
    ) {
    }
}

export type MapAction =
    | LoadMapsAction
    | LoadMapsSuccessAction
    ;

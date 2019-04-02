import { Action } from '@ngrx/store';
import { MapInfo } from '../models/map';

export enum MapActionTypes {
    SaveMap = 'SaveMap',
    SaveMapSuccess = 'SaveMapSuccess',
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

export class SaveMapAction implements Action {
    readonly type = MapActionTypes.SaveMap;

    constructor(
        public mapInfo: MapInfo,
    ) {
    }
}

export class SaveMapSuccessAction implements Action {
    readonly type = MapActionTypes.SaveMapSuccess;
}

export type MapAction =
    | LoadMapsAction
    | LoadMapsSuccessAction
    | SaveMapAction
    | SaveMapSuccessAction
    ;

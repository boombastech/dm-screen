import { Action } from '@ngrx/store';
import { MapInfo } from '../models/map';

export enum MapActionTypes {
    LoadMaps = 'LoadMaps',
    LoadMapsSuccess = 'LoadMapsSuccess',
    SaveMap = 'SaveMap',
    SaveMapSuccess = 'SaveMapSuccess',
    DeleteMap = 'DeleteMap',
    DeleteMapSuccess = 'DeleteMapSuccess',
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

export class DeleteMapAction implements Action {
    readonly type = MapActionTypes.DeleteMap;

    constructor(
        public mapInfo: MapInfo,
    ) {
    }
}

export class DeleteMapSuccessAction implements Action {
    readonly type = MapActionTypes.DeleteMapSuccess;
}

export type MapAction =
    | LoadMapsAction
    | LoadMapsSuccessAction
    | SaveMapAction
    | SaveMapSuccessAction
    | DeleteMapAction
    | DeleteMapSuccessAction
    ;

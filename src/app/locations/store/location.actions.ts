import { Action } from '@ngrx/store';
import { LocationInfo } from '../models/location-info';

export enum LocationActionTypes {
    LoadLocations = 'LoadLocations',
    LoadLocationsSuccess = 'LoadLocationsSuccess',
    SaveLocation = 'SaveLocation',
    SaveLocationSuccess = 'SaveLocationSuccess',
    DeleteLocation = 'DeleteLocation',
    DeleteLocationSuccess = 'DeleteLocationSuccess',
}

export class LoadLocationsAction implements Action {
    readonly type = LocationActionTypes.LoadLocations;
}

export class LoadLocationsSuccessAction implements Action {
    readonly type = LocationActionTypes.LoadLocationsSuccess;

    constructor(
        public locations: LocationInfo[],
    ) {
    }
}

export class SaveLocationAction implements Action {
    readonly type = LocationActionTypes.SaveLocation;

    constructor(
        public location: LocationInfo,
    ) {
    }
}

export class SaveLocationSuccessAction implements Action {
    readonly type = LocationActionTypes.SaveLocationSuccess;
}

export class DeleteLocationAction implements Action {
    readonly type = LocationActionTypes.DeleteLocation;

    constructor(
        public location: LocationInfo,
    ) {
    }
}

export class DeleteLocationSuccessAction implements Action {
    readonly type = LocationActionTypes.DeleteLocationSuccess;
}

export type LocationAction =
    | LoadLocationsAction
    | LoadLocationsSuccessAction
    | SaveLocationAction
    | SaveLocationSuccessAction
    | DeleteLocationAction
    | DeleteLocationSuccessAction
    ;

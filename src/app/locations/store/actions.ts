import { Action } from '@ngrx/store';
import { LocationInfo } from '../model/location';

export enum LocationsActionTypes {
    LoadLocations = 'LoadLocations',
    LoadLocationsSuccess = 'LoadLocationsSuccess',
}

export class LoadLocationsAction implements Action {
    readonly type = LocationsActionTypes.LoadLocations;
}

export class LoadLocationsSuccessAction implements Action {
    readonly type = LocationsActionTypes.LoadLocationsSuccess;

    constructor(
        public locations: LocationInfo[],
    ) {
    }
}

export type LocationsAction =
    | LoadLocationsAction
    | LoadLocationsSuccessAction
    ;

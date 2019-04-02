import { Action } from '@ngrx/store';
import { Marker } from '../models/marker';

export enum MarkersActionTypes {
    LoadMarkers = 'LoadMarkers',
    LoadMarkersSuccess = 'LoadMarkersSuccess',
    SaveMarker = 'SaveMarker',
    SaveMarkerSuccess = 'SaveMarkerSuccess',
    DeleteMarker = 'DeleteMarker',
    DeleteMarkerSuccess = 'DeleteMarkerSuccess',
}

export class LoadMarkersAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkers;
}

export class LoadMarkersSuccessAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkersSuccess;

    constructor(
        public markers: Marker[],
    ) {
    }
}

export class SaveMarkerAction implements Action {
    readonly type = MarkersActionTypes.SaveMarker;

    constructor(
        public marker: Marker,
    ) {
    }
}

export class SaveMarkerSuccessAction implements Action {
    readonly type = MarkersActionTypes.SaveMarkerSuccess;
}

export class DeleteMarkerAction implements Action {
    readonly type = MarkersActionTypes.DeleteMarker;

    constructor(
        public marker: Marker,
    ) {
    }
}

export class DeleteMarkerSuccessAction implements Action {
    readonly type = MarkersActionTypes.DeleteMarkerSuccess;
}

export type MarkersAction =
    | LoadMarkersAction
    | LoadMarkersSuccessAction
    | SaveMarkerAction
    | SaveMarkerSuccessAction
    | DeleteMarkerAction
    | DeleteMarkerSuccessAction
    ;

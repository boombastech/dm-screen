import { Action } from '@ngrx/store';
import { WayPoint } from '../models/waypoint';

export enum MarkersActionTypes {
    SaveMarker = 'SaveMarker',
    SaveMarkerSuccess = 'SaveMarkerSuccess',
    LoadMarkers = 'LoadMarkers',
    LoadMarkersSuccess = 'LoadMarkersSuccess',
}

export class LoadMarkersAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkers;
}

export class LoadMarkersSuccessAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkersSuccess;

    constructor(
        public markers: WayPoint[],
    ) {
    }
}

export class SaveMarkerAction implements Action {
    readonly type = MarkersActionTypes.SaveMarker;

    constructor(
        public marker: WayPoint,
    ) {
    }
}

export class SaveMarkerSuccessAction implements Action {
    readonly type = MarkersActionTypes.SaveMarkerSuccess;
}

export type MarkersAction =
    | LoadMarkersAction
    | LoadMarkersSuccessAction
    | SaveMarkerAction
    | SaveMarkerSuccessAction
    ;

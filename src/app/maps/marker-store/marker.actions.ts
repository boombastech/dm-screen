import { Action } from '@ngrx/store';
import { WayPoint } from '../models/waypoint';

export enum MarkersActionTypes {
    LoadMarkers = 'LoadMarkers',
    LoadMarkersSuccess = 'LoadMarkersSuccess',
}

export class LoadMarkersAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkers;

    constructor(
        public userId: string,
    ) {
    }
}

export class LoadMarkersSuccessAction implements Action {
    readonly type = MarkersActionTypes.LoadMarkersSuccess;

    constructor(
        public markers: WayPoint[],
    ) {
    }
}

export type MarkersAction =
    | LoadMarkersAction
    | LoadMarkersSuccessAction
    ;

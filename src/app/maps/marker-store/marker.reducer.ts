import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarkerState } from './marker-state';
import { MarkersAction, MarkersActionTypes } from './marker.actions';

export const selectMarkers = createFeatureSelector<MarkerState>('markers');

export const selectMarkersByMapId = (mapId: string) => {
    return createSelector(selectMarkers, state => state.markers.find(marker => marker.mapId === mapId));
};

export function markerReducer(state = { markers: [] }, action: MarkersAction): MarkerState {
    switch (action.type) {
        case MarkersActionTypes.LoadMarkersSuccess: {
            const markerIds = action.markers.map(marker => marker.id);
            const stateWithoutNewMarkers = state.markers.filter(marker => markerIds.indexOf(marker.id) === -1);
            return {
                markers: [...stateWithoutNewMarkers, action.markers],
            };
        }

        default: {
            return state;
        }
    }
}

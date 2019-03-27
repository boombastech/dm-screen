import { createFeatureSelector } from '@ngrx/store';
import { MapState } from './map-state';
import { MapAction, MapActionTypes } from './map.actions';

export const selectMaps = createFeatureSelector<MapState>('map');

export function mapReducer(state = { maps: [] }, action: MapAction): MapState {
    switch (action.type) {
        case MapActionTypes.WatchUserAction: {
            return state;
        }

        default: {
            return state;
        }
    }
}

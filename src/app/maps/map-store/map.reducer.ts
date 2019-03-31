import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapState } from './map-state';
import { MapAction, MapActionTypes } from './map.actions';

export const selectMaps = createFeatureSelector<MapState>('maps');

export const selectMapById = (mapId: string) => {
    return createSelector(selectMaps, state => state.maps.find(map => map.id === mapId));
};

export function mapReducer(state = { maps: [] }, action: MapAction): MapState {
    switch (action.type) {
        case MapActionTypes.LoadMapsSuccess: {
            console.log('cheese');
            return { maps: action.maps };
        }

        default: {
            return state;
        }
    }
}

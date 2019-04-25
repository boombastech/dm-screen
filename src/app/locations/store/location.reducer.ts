import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationState } from './location-state';
import { LocationAction, LocationActionTypes } from './location.actions';

export const selectLocations = createFeatureSelector<LocationState>('locations');

export const selectLocationById = (id: string) => {
    return createSelector(selectLocations, state => state.locations.find(map => map.id === id));
};

export function locationReducer(state = { locations: [] }, action: LocationAction): LocationState {
    switch (action.type) {
        case LocationActionTypes.LoadLocationsSuccess: {
            const npcIds = action.locations.map(location => location.id);
            const stateWithoutNewLocations = state.locations.filter(npc => npcIds.indexOf(npc.id) === -1);
            return {
                locations: [...stateWithoutNewLocations, ...action.locations],
            };
        }

        default: {
            return state;
        }
    }
}

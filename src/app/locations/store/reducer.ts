import { createFeatureSelector } from '@ngrx/store';
import { LocationsAction, LocationsActionTypes } from './actions';
import { LocationState } from './state';

export const selectLocations = createFeatureSelector<LocationState>('locationState');

export function locationReducer(state = { locations: [] }, action: LocationsAction): LocationState {
    switch (action.type) {
        case LocationsActionTypes.LoadLocationsSuccess: {
            return { locations: action.locations };
        }

        default: {
            return state;
        }
    }
}

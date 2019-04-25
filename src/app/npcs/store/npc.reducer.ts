import { NpcState } from './npc-state';
import { NpcAction, NpcActionTypes } from './npc.actions';

const initialState: NpcState = {
    npcs: [],
    isError: false,
    isLoaded: false,
    isLoading: false,
};

export function npcReducer(state = initialState, action: NpcAction): NpcState {
    switch (action.type) {
        case NpcActionTypes.LoadNpcsSuccess: {
            return {
                npcs: action.npcs,
                isError: false,
                isLoaded: true,
                isLoading: false,
            };
        }

        case NpcActionTypes.LoadNpcs: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case NpcActionTypes.NpcError: {
            return {
                ...state,
                isLoading: false,
                isLoaded: false,
                isError: true,
            };
        }

        default: {
            return state;
        }
    }
}

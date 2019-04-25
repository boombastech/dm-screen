import { Npc } from '../models/npc';

export interface NpcState {
    npcs: Npc[];
    isLoaded: boolean;
    isLoading: boolean;
    isError: boolean;
}

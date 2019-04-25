import { createFeatureSelector } from '@ngrx/store';
import { NpcState } from './npc-state';

export const selectNpcState = createFeatureSelector<NpcState>('npcState');

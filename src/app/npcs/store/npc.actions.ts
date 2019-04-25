import { Action } from '@ngrx/store';
import { Npc } from '../models/npc';

export enum NpcActionTypes {
    LoadNpcs = 'LoadNpcs',
    LoadNpcsSuccess = 'LoadNpcsSuccess',
    SaveNpc = 'SaveNpc',
    SaveNpcSuccess = 'SaveNpcSuccess',
    DeleteNpc = 'DeleteNpc',
    DeleteNpcSuccess = 'DeleteNpcSuccess',
    NpcError = 'NpcError',
}

export class LoadNpcsAction implements Action {
    readonly type = NpcActionTypes.LoadNpcs;
}

export class LoadNpcsSuccessAction implements Action {
    readonly type = NpcActionTypes.LoadNpcsSuccess;

    constructor(
        public npcs: Npc[],
    ) {
    }
}

export class SaveNpcAction implements Action {
    readonly type = NpcActionTypes.SaveNpc;

    constructor(
        public npc: Npc,
    ) {
    }
}

export class SaveNpcSuccessAction implements Action {
    readonly type = NpcActionTypes.SaveNpcSuccess;
}

export class DeleteNpcAction implements Action {
    readonly type = NpcActionTypes.DeleteNpc;

    constructor(
        public npc: Npc,
    ) {
    }
}

export class DeleteNpcSuccessAction implements Action {
    readonly type = NpcActionTypes.DeleteNpcSuccess;
}

export class NpcErrorAction implements Action {
    readonly type = NpcActionTypes.NpcError;
}

export type NpcAction =
    | LoadNpcsAction
    | LoadNpcsSuccessAction
    | SaveNpcAction
    | SaveNpcSuccessAction
    | DeleteNpcAction
    | DeleteNpcSuccessAction
    | NpcErrorAction
    ;

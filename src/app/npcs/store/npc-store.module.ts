import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NpcEffects } from './npc.effects';
import { npcReducer } from './npc.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('npcState', npcReducer),
        EffectsModule.forFeature([NpcEffects]),
    ],
    providers: [
        NpcEffects,
    ],
})
export class NpcStoreModule {
}

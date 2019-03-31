import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MapEffects } from './map.effects';
import { mapReducer } from './map.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('maps', mapReducer),
        EffectsModule.forFeature([MapEffects]),
    ],
    providers: [
        MapEffects,
    ],
})
export class MapStoreModule {
}

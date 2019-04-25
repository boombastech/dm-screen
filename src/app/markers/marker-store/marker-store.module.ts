import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkerEffects } from './marker.effects';
import { markerReducer } from './marker.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('markers', markerReducer),
        EffectsModule.forFeature([MarkerEffects]),
    ],
    providers: [
        MarkerEffects,
    ],
})
export class MarkerStoreModule {
}

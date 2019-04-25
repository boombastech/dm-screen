import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LocationEffects } from './location.effects';
import { locationReducer } from './location.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('locations', locationReducer),
        EffectsModule.forFeature([LocationEffects]),
    ],
    providers: [
        LocationEffects,
    ],
})
export class LocationStoreModule {
}

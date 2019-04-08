import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LocationEffects } from './effects';
import { locationReducer } from './reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('locationState', locationReducer),
        EffectsModule.forFeature([LocationEffects]),
    ],
    providers: [
        LocationEffects,
    ],
})
export class LocationStoreModule {
}

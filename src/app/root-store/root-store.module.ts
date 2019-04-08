import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationStoreModule } from '../authentication/store/authentication-store.module';
import { LocationStoreModule } from '../locations/store/store.module';
import { MapStoreModule } from '../maps/map-store/map-store.module';
import { MarkerStoreModule } from '../maps/marker-store/marker-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthenticationStoreModule,
        MapStoreModule,
        MarkerStoreModule,
        LocationStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],
})
export class RootStoreModule {
}

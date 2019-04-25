import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationStoreModule } from '../authentication/store/authentication-store.module';
import { MapStoreModule } from '../maps/store/map-store.module';
import { MarkerStoreModule } from '../markers/marker-store/marker-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthenticationStoreModule,
        MapStoreModule,
        MarkerStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],
})
export class RootStoreModule {
}

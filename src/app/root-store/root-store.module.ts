import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationStoreModule } from './authentication-store/authentication-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthenticationStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],
})
export class RootStoreModule {
}

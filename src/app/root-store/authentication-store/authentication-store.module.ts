import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationModule } from '../../firebase/authentication/authentication.module';
import { AuthenticationEffects } from './authentication.effects';
import { authenticationReducer } from './authentication.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('authentication', authenticationReducer),
        EffectsModule.forFeature([AuthenticationEffects]),
        AuthenticationModule,
    ],
    providers: [
        AuthenticationEffects,
    ],
})
export class AuthenticationStoreModule {
}

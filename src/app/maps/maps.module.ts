import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FirebaseStorageModule } from '../firebase/storage/firebase-storage.module';
import { UploadMapComponent } from './components/upload-map/upload-map.component';
import { MapsService } from './services/maps.service';

@NgModule({
    declarations: [
        UploadMapComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FirebaseStorageModule,
        AuthenticationModule,
    ],
    providers: [
        MapsService,
    ],
    bootstrap: [],
    exports: [
        UploadMapComponent,
    ],
})
export class MapsModule {
}

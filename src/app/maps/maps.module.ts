import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FirebaseStorageModule } from '../firebase/storage/firebase-storage.module';
import { EditMapComponent } from './components/edit-map/edit-map.component';
import { LibraryComponent } from './components/library/library.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { MapTileComponent } from './components/map-tile/map-tile.component';
import { UploadMapComponent } from './components/upload-map/upload-map.component';
import { MapsService } from './services/maps.service';

@NgModule({
    declarations: [
        UploadMapComponent,
        LibraryComponent,
        MapListComponent,
        MapTileComponent,
        EditMapComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        FirebaseStorageModule,
        AuthenticationModule,
    ],
    providers: [
        MapsService,
    ],
    bootstrap: [],
    exports: [
        UploadMapComponent,
        LibraryComponent,
        EditMapComponent,
    ],
})
export class MapsModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FirebaseStorageModule } from '../firebase/storage/firebase-storage.module';
import { EditMapComponent } from './components/edit-map/edit-map.component';
import { LibraryComponent } from './components/library/library.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { MapTileComponent } from './components/map-tile/map-tile.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MapsService } from './services/maps.service';
import { CreateMapComponent } from './components/create-map/create-map.component';
import { MapFormComponent } from './components/map-form/map-form.component';

@NgModule({
    declarations: [
        LibraryComponent,
        MapListComponent,
        MapTileComponent,
        MapViewComponent,
        EditMapComponent,
        CreateMapComponent,
        MapFormComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        FirebaseStorageModule,
        AuthenticationModule,
        ReactiveFormsModule,
    ],
    providers: [
        MapsService,
    ],
    bootstrap: [],
    exports: [
        LibraryComponent,
        EditMapComponent,
    ],
})
export class MapsModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FirebaseStorageModule } from '../firebase/storage/firebase-storage.module';
import { AddMarkerModalComponent } from './components/add-marker-modal/add-marker-modal.component';
import { CreateMapComponent } from './components/create-map/create-map.component';
import { EditMapComponent } from './components/edit-map/edit-map.component';
import { MapEditorToolsComponent } from './components/map-editor-tools/map-editor-tools.component';
import { MapFormComponent } from './components/map-form/map-form.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { MapTileComponent } from './components/map-tile/map-tile.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MarkerContainerComponent } from './components/marker-container/marker-container.component';
import { MarkerComponent } from './components/marker/marker.component';
import { MarkerFilterPipe } from './pipes/marker-filter.pipe';
import { MapService } from './services/map.service';
import { MarkerService } from './services/marker.service';

@NgModule({
    declarations: [
        MapListComponent,
        MapTileComponent,
        MapViewComponent,
        EditMapComponent,
        CreateMapComponent,
        MapFormComponent,
        MapEditorToolsComponent,
        MarkerContainerComponent,
        MarkerComponent,
        AddMarkerModalComponent,
        MarkerFilterPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule,
        FirebaseStorageModule,
        AuthenticationModule,
        ReactiveFormsModule,
    ],
    providers: [
        MapService,
        MarkerService,
    ],
    bootstrap: [],
    entryComponents: [
        AddMarkerModalComponent,
    ],
    exports: [
        EditMapComponent,
    ],
})
export class MapsModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FirebaseStorageModule } from '../firebase/storage/firebase-storage.module';
import { AddMarkerModalComponent } from '../markers/components/add-marker-modal/add-marker-modal.component';
import { MarkerContainerComponent } from '../markers/components/marker-container/marker-container.component';
import { MarkerComponent } from '../markers/components/marker/marker.component';
import { MarkerService } from '../markers/services/marker.service';
import { CreateMapComponent } from './components/create-map/create-map.component';
import { EditMapComponent } from './components/edit-map/edit-map.component';
import { MapEditorToolsComponent } from './components/map-editor-tools/map-editor-tools.component';
import { MapFormComponent } from './components/map-form/map-form.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { MapTileComponent } from './components/map-tile/map-tile.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MarkerFilterPipe } from './pipes/marker-filter.pipe';
import { MapService } from './services/map.service';

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
        MapViewComponent,
    ],
})
export class MapsModule {
}

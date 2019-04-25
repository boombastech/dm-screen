import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { LocationFormComponent } from './locations/components/location-form/location-form.component';
import { ViewLocationComponent } from './locations/components/view-location/view-location.component';
import { CreateMapComponent } from './maps/components/create-map/create-map.component';
import { EditMapComponent } from './maps/components/edit-map/edit-map.component';
import { MapListComponent } from './maps/components/map-list/map-list.component';
import { MapViewComponent } from './maps/components/map-view/map-view.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { StylesComponent } from './prototype/styles/styles.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MapViewComponent,
            },
            {
                path: 'locations/create',
                component: LocationFormComponent,
            },
            {
                path: 'locations/view',
                component: ViewLocationComponent,
            },
            {
                path: 'prototype',
                component: PrototypeComponent,
            },
            {
                path: 'styles',
                component: StylesComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'maps/library',
                component: MapListComponent,
            },
            {
                path: 'maps/view/:mapId',
                component: MapViewComponent,
            },
            {
                path: 'maps/create',
                component: CreateMapComponent,
            },
            {
                path: 'maps/edit/:mapId',
                component: EditMapComponent,
            },
        ],
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}

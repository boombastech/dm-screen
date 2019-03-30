import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { CreateMapComponent } from './maps/components/create-map/create-map.component';
import { EditMapComponent } from './maps/components/edit-map/edit-map.component';
import { MapListComponent } from './maps/components/map-list/map-list.component';
import { MapViewComponent } from './maps/components/map-view/map-view.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MapViewComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateMapComponent } from './maps/components/create-map/create-map.component';
import { EditMapComponent } from './maps/components/edit-map/edit-map.component';
import { MapListComponent } from './maps/components/map-list/map-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
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
                component: HomeComponent,
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

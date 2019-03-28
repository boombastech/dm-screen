import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UploadMapComponent } from './maps/components/upload-map/upload-map.component';

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
                path: 'upload',
                component: UploadMapComponent,
            },
            {
                path: 'map/:mapId',
                component: HomeComponent,
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

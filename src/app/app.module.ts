import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './bulma/navbar/navbar.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyDUN5rqFWZU1C3NR508QGMihonH8eSHF0Q',
            authDomain: 'dm-screen-66ebf.firebaseapp.com',
            databaseURL: 'https://dm-screen-66ebf.firebaseio.com',
            projectId: 'dm-screen-66ebf',
            storageBucket: 'dm-screen-66ebf.appspot.com',
            messagingSenderId: '283118106772',
        }),
        RootStoreModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
        LoggedInGuard,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}

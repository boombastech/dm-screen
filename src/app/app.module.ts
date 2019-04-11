import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { ModalModule } from './bulma/modal/modal.module';
import { NavbarModule } from './bulma/navbar/navbar.module';
import { FirebaseFirestoreModule } from './firebase/firestore/firebase-firestore.module';
import { LoggedInGuard } from './guards/logged-in.guard';
import { MapsModule } from './maps/maps.module';
import { RootStoreModule } from './root-store/root-store.module';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { PrototypeComponent } from './prototype/prototype.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SimpleModalComponent,
        PrototypeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        MapsModule,
        ModalModule,
        FirebaseFirestoreModule,
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
    entryComponents: [
        SimpleModalComponent,
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormWrapperModule } from '../form-wrapper/form-wrapper.module';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { LocationService } from './services/location.service';
import { ViewLocationComponent } from './components/view-location/view-location.component';

@NgModule({
    declarations: [
        LocationFormComponent,
        ViewLocationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormWrapperModule,
    ],
    providers: [
        LocationService,
    ],
    bootstrap: [],
    entryComponents: [
        LocationFormComponent,
    ],
    exports: [],
})
export class LocationModule {
}

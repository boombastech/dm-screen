import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'app-location-form',
    templateUrl: './location-form.component.html',
    styleUrls: ['./location-form.component.sass'],
})
export class LocationFormComponent implements OnInit {

    constructor(
        private locationService: LocationService,
        private formBuilder: FormBuilder,
    ) {
    }

    form: FormGroup;

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            description: '',
        });
    }

    onSubmit() {
        console.log(this.form.controls.name.value);
        console.log(this.form.controls.description.value);
    }
}

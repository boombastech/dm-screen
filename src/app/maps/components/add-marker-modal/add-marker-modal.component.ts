import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { colours, icons, Marker } from '../../models/marker';
import { MarkerService } from '../../services/marker.service';

@Component({
    selector: 'app-add-marker-modal',
    templateUrl: './add-marker-modal.component.html',
    styleUrls: ['./add-marker-modal.component.scss'],
})
export class AddMarkerModalComponent implements OnInit {
    form: FormGroup;

    @Input() marker: Marker;
    @Output() confirmation: EventEmitter<boolean> = new EventEmitter();

    colours = colours;
    icons = icons;

    constructor(
        private formBuilder: FormBuilder,
        private markerService: MarkerService,
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [this.marker.name, Validators.required],
            description: this.marker.description,
            icon: [this.marker.icon ? this.marker.icon : 'fa-map-marker-alt', Validators.required],
            colour: [this.marker.colour ? this.marker.colour : '#000000', Validators.required],
        });
    }

    onSubmit() {
        this.markerService.save({
            ...this.marker,
            name: this.form.controls.name.value,
            description: this.form.controls.description.value,
            icon: this.form.controls.icon.value,
            colour: this.form.controls.colour.value,
        }).subscribe(() => this.confirmation.emit(true));
    }
}

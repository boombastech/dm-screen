import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marker } from '../../models/marker';
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

    constructor(
        private formBuilder: FormBuilder,
        private markerService: MarkerService,
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            type: [this.marker.type, Validators.required],
        });
    }

    onSubmit() {
        this.markerService.save({
            ...this.marker,
            type: this.form.controls.type.value,
        }).subscribe(() => this.confirmation.emit(true));
    }
}

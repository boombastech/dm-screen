import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../bulma/modal/services/modal.service';
import { Marker } from '../../models/marker';
import { AddMarkerModalComponent } from '../add-marker-modal/add-marker-modal.component';

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss'],
})
export class MarkerComponent {

    @Input()
    marker: Marker;

    constructor(
        private modalService: ModalService,
    ) {}

    handleClick() {
        this.modalService.openModal(AddMarkerModalComponent, {inputs: {marker: this.marker}}).subscribe(console.log);
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../../bulma/modal/services/modal.service';
import { AddMarkerModalComponent } from '../../../markers/components/add-marker-modal/add-marker-modal.component';
import { LocationInfo } from '../../../markers/models/locationInfo';
import { MarkerService } from '../../../markers/services/marker.service';
import { MapInfo } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
    map$: Observable<MapInfo>;
    customZoom = 1;
    addMarkerFlag = false;

    @Input() mapId: string;

    constructor(
        private mapsService: MapService,
        private markerService: MarkerService,
        private route: ActivatedRoute,
        private modalService: ModalService,
    ) {
    }

    ngOnInit() {
        this.map$ = this.mapsService.getById(this.mapId);
    }

    handleAddMarker() {
        this.addMarkerFlag = true;
    }

    placeLocationMarker(event: MouseEvent, mapId: string) {
        if (this.addMarkerFlag) {
            const marker: LocationInfo = {
                id: this.markerService.createId(),
                type: '',
                marker: { mapId, x: event.offsetX, y: event.offsetY },
            };
            this.modalService.openModal(AddMarkerModalComponent, { inputs: { marker } }).subscribe(() => {
                this.addMarkerFlag = false;
            });
        }
    }
}

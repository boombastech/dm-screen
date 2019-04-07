import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ModalService } from '../../../bulma/modal/services/modal.service';
import { MapInfo } from '../../models/map';
import { Marker } from '../../models/marker';
import { MapService } from '../../services/map.service';
import { MarkerService } from '../../services/marker.service';
import { AddMarkerModalComponent } from '../add-marker-modal/add-marker-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
    map$: Observable<MapInfo>;
    customZoom = 1;
    addMarkerFlag = false;

    constructor(
        private mapsService: MapService,
        private markerService: MarkerService,
        private route: ActivatedRoute,
        private modalService: ModalService,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            map(params => params.mapId),
            flatMap(mapId => this.mapsService.getById(mapId)),
        );
    }

    handleAddMarker() {
        this.addMarkerFlag = true;
    }

    placeLocationMarker(event: MouseEvent, mapId: string) {
        if (this.addMarkerFlag) {
            const marker: Marker = {
                id: this.markerService.createId(),
                mapId,
                coordinates: { x: event.offsetX, y: event.offsetY },
                name: '',
            };
            this.modalService.openModal(AddMarkerModalComponent, {inputs: {marker}}).subscribe(() => {
                this.addMarkerFlag = false;
            });
        }
    }
}

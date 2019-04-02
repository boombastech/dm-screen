import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { MapInfo } from '../../models/map';
import { Marker } from '../../models/marker';
import { MapService } from '../../services/map.service';
import { MarkerService } from '../../services/marker.service';

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
        console.log(`coords - x: ${event.offsetX}, y: ${event.offsetY}`);
        if (this.addMarkerFlag) {
            const waypoint: Marker = {
                mapId,
                coordinates: { x: event.offsetX, y: event.offsetY },
                name: 'New Waypoint',
            };
            this.markerService.save(waypoint);
        }
    }
}

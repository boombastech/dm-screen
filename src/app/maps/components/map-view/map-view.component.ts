import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { MapInfo } from '../../models/map';
import { WayPoint } from '../../models/waypoint';
import { MapsService } from '../../services/maps.service';
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
    private userId: string;

    constructor(
        private mapsService: MapsService,
        private markerService: MarkerService,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            map(params => params.mapId),
            flatMap(mapId => this.mapsService.getById(mapId)),
        );

        this.authenticationService.getUser().subscribe(userState => this.userId = userState.activeUser.id);
    }

    handleAddMarker() {
        this.addMarkerFlag = true;
    }

    placeLocationMarker(event: MouseEvent, mapId: string) {
        if (this.addMarkerFlag) {
            const waypoint: WayPoint = {
                mapId,
                coordinates: { x: event.offsetX, y: event.offsetY },
                name: 'New Waypoint',
            };
            this.markerService.save(waypoint, this.userId);
        }
    }
}

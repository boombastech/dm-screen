import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapInfo } from '../../models/map';
import { MapsService } from '../../services/maps.service';

@Component({
    selector: 'app-home',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
    map$: Observable<MapInfo>;

    constructor(
        private mapsService: MapsService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            flatMap(params => this.mapsService.getById(params.mapId)),
        );
    }
}

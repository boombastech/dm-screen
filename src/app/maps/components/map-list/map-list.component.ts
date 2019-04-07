import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MapInfo } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-map-list',
    templateUrl: './map-list.component.html',
    styleUrls: ['./map-list.component.scss'],
})
export class MapListComponent implements OnInit {
    maps$: Observable<MapInfo[]>;

    constructor(
        private mapsService: MapService,
    ) {
    }

    ngOnInit() {
        this.maps$ = this.mapsService.getAll();
    }
}

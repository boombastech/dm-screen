import { Component, Input, OnInit } from '@angular/core';
import { MapInfo } from '../../models/map';

@Component({
    selector: 'app-map-tile',
    templateUrl: './map-tile.component.html',
    styleUrls: ['./map-tile.component.scss'],
})
export class MapTileComponent implements OnInit {

    @Input()
    map: MapInfo;

    constructor() {
    }

    ngOnInit() {
    }
}

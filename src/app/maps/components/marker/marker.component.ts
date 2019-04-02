import { Component, Input, OnInit } from '@angular/core';
import { WayPoint } from '../../models/waypoint';

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss'],
})
export class MarkerComponent implements OnInit {

    @Input()
    marker: WayPoint;

    constructor() {
    }

    ngOnInit() {
        console.log(`marker ${this.marker.id} initialized`);
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WayPoint } from '../../models/waypoint';
import { MarkerService } from '../../services/marker.service';

@Component({
    selector: 'app-marker-container',
    templateUrl: './marker-container.component.html',
    styleUrls: ['./marker-container.component.scss'],
})
export class MarkerContainerComponent implements OnInit {

    @Input()
    mapId: string;

    markers$: Observable<WayPoint[]>;

    constructor(
        private markerService: MarkerService,
    ) {
    }

    ngOnInit() {
        this.markers$ = this.markerService.getAll(this.mapId);
    }
}

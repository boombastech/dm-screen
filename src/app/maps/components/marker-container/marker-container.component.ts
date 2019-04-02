import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marker } from '../../models/marker';
import { MarkerService } from '../../services/marker.service';

@Component({
    selector: 'app-marker-container',
    templateUrl: './marker-container.component.html',
    styleUrls: ['./marker-container.component.scss'],
})
export class MarkerContainerComponent implements OnInit {

    @Input()
    mapId: string;

    markers$: Observable<Marker[]>;

    constructor(
        private markerService: MarkerService,
    ) {
    }

    ngOnInit() {
        this.markers$ = this.markerService.getAll(this.mapId);
    }
}

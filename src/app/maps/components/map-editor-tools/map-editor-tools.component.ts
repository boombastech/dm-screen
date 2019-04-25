import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationInfo } from '../../../markers/models/locationInfo';
import { MarkerService } from '../../../markers/services/marker.service';

@Component({
    selector: 'app-map-editor-tools',
    templateUrl: './map-editor-tools.component.html',
    styleUrls: ['./map-editor-tools.component.scss'],
})
export class MapEditorToolsComponent implements OnInit {

    @Input() zoom = 1;
    @Input() mapId: string;

    @Output() zoomChange: EventEmitter<number> = new EventEmitter();
    @Output() addMarkerFlag: EventEmitter<void> = new EventEmitter();

    markers$: Observable<LocationInfo[]>;
    step = 0.01;
    searchFilter = '';

    constructor(
        private markerService: MarkerService,
    ) {
    }

    ngOnInit() {
        this.markers$ = this.markerService.getAll(this.mapId);
    }

    addMarker() {
        this.addMarkerFlag.emit();
    }

    onZoomChange(value: number) {
        this.zoomChange.emit(value);
    }

    zoomIn() {
        this.zoom += this.step;
        this.zoomChange.emit(this.zoom);
    }

    zoomOut() {
        this.zoom -= this.step;
        this.zoomChange.emit(this.zoom);
    }
}

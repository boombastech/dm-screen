import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-map-editor-tools',
    templateUrl: './map-editor-tools.component.html',
    styleUrls: ['./map-editor-tools.component.scss'],
})
export class MapEditorToolsComponent implements OnInit {

    show = false;

    @Input()
    zoom = 1;

    @Output()
    zoomChange: EventEmitter<number> = new EventEmitter<number>();
    step = 0.01;

    constructor() {
    }

    ngOnInit() {
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

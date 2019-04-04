import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../bulma/modal/services/modal.service';
import { MapInfo } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-map-tile',
    templateUrl: './map-tile.component.html',
    styleUrls: ['./map-tile.component.scss'],
})
export class MapTileComponent implements OnInit {

    @Input()
    map: MapInfo;

    constructor(
        private mapService: MapService,
        private modalService: ModalService,
    ) {
    }

    ngOnInit() {
    }

    deleteMap() {
        this.modalService.openDialog('Are you sure you want to delete this map?', 'Delete map').subscribe(result => {
            if (result) {
                this.mapService.delete(this.map);
            }
        });

    }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../bulma/modal/services/modal.service';
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
        private modalService: ModalService,
    ) {
    }

    ngOnInit() {
        this.maps$ = this.mapsService.getAll();
    }

    cheese() {
        this.modalService.openDialog('cheese').subscribe(console.log);
    }
}

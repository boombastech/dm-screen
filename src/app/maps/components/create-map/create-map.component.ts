import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapInfo } from '../../models/map';
import { MapsService } from '../../services/maps.service';

@Component({
    selector: 'app-create-map',
    templateUrl: './create-map.component.html',
    styleUrls: ['./create-map.component.scss'],
})
export class CreateMapComponent implements OnInit {

    mapInfo: MapInfo = {
        name: '',
        downloadUrl: '',
        id: '',
    };

    constructor(
        private mapsService: MapsService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.mapInfo.id = this.mapsService.createId();
    }

    onSave() {
        this.router.navigate(['/maps/library']);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapInfo } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-edit-map',
    templateUrl: './edit-map.component.html',
    styleUrls: ['./edit-map.component.scss'],
})
export class EditMapComponent implements OnInit {
    map$: Observable<MapInfo>;

    constructor(
        private mapsService: MapService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            flatMap(params => this.mapsService.getById(params.mapId)),
        );
    }

    onSave(mapInfo: MapInfo) {
        this.router.navigate(['/maps/view', mapInfo.id]);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapInfo } from '../../maps/models/map';
import { MapsService } from '../../maps/services/maps.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    map$: Observable<MapInfo>;

    constructor(
        private mapsService: MapsService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            flatMap(params => this.mapsService.getById(params.mapId)),
        );
    }
}

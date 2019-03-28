import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapInfo } from '../../maps/models/map';
import { selectMapById } from '../../maps/store/map.reducer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private map$: Observable<MapInfo>;

    constructor(
        private store: Store<any>,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.map$ = this.route.params.pipe(
            flatMap(params => this.store.select(selectMapById(params.mapId))),
        );
    }

}

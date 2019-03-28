import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapInfo } from '../../models/map';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.scss']
})
export class EditMapComponent implements OnInit {
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

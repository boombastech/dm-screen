import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MapsService } from '../../services/maps.service';

@Component({
    selector: 'app-upload-map',
    templateUrl: './upload-map.component.html',
    styleUrls: ['./upload-map.component.scss'],
})
export class UploadMapComponent implements OnInit {
    percentage$: Observable<number | undefined>;

    constructor(
        private mapsService: MapsService,
    ) {
    }

    ngOnInit() {
    }

    upload(fileList: FileList) {
        const angularFireUploadTaskObservable = this.mapsService.upload(fileList.item(0));
        angularFireUploadTaskObservable.subscribe(task => {
            this.percentage$ = task.percentageChanges();
            task.then(finishedTask => finishedTask.ref.getDownloadURL())
                .then(value => console.log(value));
        });
    }
}

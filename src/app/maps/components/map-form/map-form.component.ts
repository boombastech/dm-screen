import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MapInfo } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-map-form',
    templateUrl: './map-form.component.html',
    styleUrls: ['./map-form.component.scss'],
})
export class MapFormComponent implements OnInit {

    @Input()
    mapInfo: MapInfo;

    @Output()
    mapInfoChange: EventEmitter<MapInfo> = new EventEmitter();

    form: FormGroup;

    submitted = false;
    uploading = false;

    percentage$: Observable<number | undefined>;

    constructor(
        private formBuilder: FormBuilder,
        private mapsService: MapService,
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [this.mapInfo.name, Validators.required],
            description: this.mapInfo.description,
            downloadUrl: [this.mapInfo.downloadUrl, Validators.required],
        });

        if (this.mapInfo.downloadUrl) {
            this.uploading = true;
        }
    }

    onFileUpload(fileList: FileList) {
        this.uploading = true;
        const angularFireUploadTaskObservable = this.mapsService.upload(fileList.item(0), this.mapInfo.id);
        angularFireUploadTaskObservable.subscribe(task => {
            this.percentage$ = task.percentageChanges();
            task.then(finishedTask => finishedTask.ref.getDownloadURL())
                .then(value => this.form.controls.downloadUrl.setValue(value));
        });
    }

    onSubmit() {
        this.submitted = true;
        this.mapsService.save({
            ...this.mapInfo,
            name: this.form.controls.name.value,
            description: this.form.controls.description.value,
            downloadUrl: this.form.controls.downloadUrl.value,
        }).subscribe(mapInfo => this.mapInfoChange.emit(mapInfo));
    }
}

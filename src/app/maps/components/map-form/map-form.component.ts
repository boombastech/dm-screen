import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MapInfo } from '../../models/map';
import { MapsService } from '../../services/maps.service';

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
        private mapsService: MapsService,
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            id: this.mapInfo.id ? this.mapInfo.id : this.mapsService.createId(),
            name: [this.mapInfo.name, Validators.required],
            description: this.mapInfo.description,
            downloadUrl: [this.mapInfo.downloadUrl, Validators.required],
        });
    }

    onFileUpload(fileList: FileList) {
        this.uploading = true;
        const angularFireUploadTaskObservable = this.mapsService.upload(fileList.item(0), this.form.controls.id.value);
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
            id: this.form.controls.id.value,
            name: this.form.controls.name.value,
            description: this.form.controls.description.value,
            downloadUrl: this.form.controls.downloadUrl.value,
        }).subscribe(mapInfo => this.mapInfoChange.emit(mapInfo));
    }
}

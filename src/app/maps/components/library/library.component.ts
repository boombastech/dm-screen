import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { filter, flatMap } from 'rxjs/operators';
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {

    constructor(
        private angularFireStorage: AngularFireStorage,
        private authenticationService: AuthenticationService,
    ) {
    }

    ngOnInit() {
        this.authenticationService.getUser().pipe(
            filter(state => !!state.activeUser),
            flatMap(state => this.angularFireStorage.ref('images/' + state.activeUser.id).getMetadata()),
        ).subscribe(console.log);
    }

}

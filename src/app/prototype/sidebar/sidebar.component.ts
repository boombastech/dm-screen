import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {


    showSidebar = true;
    showMarkerTypes = true;

    constructor() {
    }

    ngOnInit() {
    }

    toggleMarkerTypes() {
        this.showMarkerTypes = !this.showMarkerTypes;
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'form-text-area',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.sass'],
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective,
        },
    ],
})
export class TextAreaComponent implements OnInit {

    @Input() labelText: string;
    @Input() id: string;
    @Input() control: AbstractControl;

    constructor() {
    }

    ngOnInit() {
    }
}

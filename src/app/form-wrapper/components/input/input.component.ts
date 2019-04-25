import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'form-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass'],
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective,
        },
    ],
})
export class InputComponent implements OnInit {

    @Input() labelText: string;
    @Input() control: AbstractControl;
    @Input() type: 'text' | 'number' | 'password' = 'text';

    constructor() {
    }

    ngOnInit() {
    }

}

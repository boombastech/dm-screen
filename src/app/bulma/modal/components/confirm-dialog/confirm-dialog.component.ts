import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {

    @Input() title = 'Confirm';
    @Input() content: string;
    @Input() backgroundClickCancel = true;

    @Output() confirmation: EventEmitter<boolean> = new EventEmitter();

    confirm() {
        this.confirmation.emit(true);
    }

    cancel() {
        this.confirmation.emit(false);
    }

    backgroundClick() {
        if (this.backgroundClickCancel) {
            this.cancel();
        }
    }
}

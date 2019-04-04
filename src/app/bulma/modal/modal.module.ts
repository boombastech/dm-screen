import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        ModalService,
        DomService,
    ],
    entryComponents: [
        ConfirmDialogComponent,
    ],
})
export class ModalModule {
}

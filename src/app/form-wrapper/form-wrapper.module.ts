import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [
        InputComponent,
        TextAreaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        InputComponent,
        TextAreaComponent,
    ],
})
export class FormWrapperModule {
}

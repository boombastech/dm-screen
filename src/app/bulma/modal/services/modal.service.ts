import { ComponentFactoryResolver, Injectable, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { DomService } from './dom.service';

@Injectable({
    providedIn: 'root',
})
export class ModalService {

    private modalOpen = false;

    constructor(
        private domService: DomService,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
    ) {
    }

    openDialog(content: string, title?: string): Observable<boolean> {
        return this.openModal<boolean>(ConfirmDialogComponent, { inputs: { content, title } });
    }

    openModal<S>(component: Type<any>, config: Config): Observable<S> {
        if (!this.modalOpen) {
            const componentRef = this.componentFactoryResolver
                .resolveComponentFactory(component)
                .create(this.injector);

            const inputs = config.inputs;

            if (inputs) {
                Object.keys(inputs).forEach(index => componentRef.instance[index] = inputs[index]);
            }

            this.domService.appendComponentTo(componentRef);
            this.modalOpen = true;

            return (componentRef.instance as any).confirmation.pipe(
                tap(() => this.closeModal()),
            );
        }
    }

    closeModal() {
        if (this.modalOpen) {
            this.domService.removeComponent();
            this.modalOpen = false;
        }
    }
}

export interface Config {
    inputs?: { [key: string]: any };
    outputs?: { [key: string]: any };
}

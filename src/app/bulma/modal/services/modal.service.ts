import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type } from '@angular/core';
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
        return this.openModal<ConfirmDialogComponent, boolean>(ConfirmDialogComponent, { inputs: { content, title } });
    }

    openModal<T, S>(component: Type<T>, config: Config): Observable<S> {
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
                tap(() => this.closeModal())
            );
        }
    }

    closeModal() {
        if (this.modalOpen) {
            this.domService.removeComponent();
            this.modalOpen = false;
        }
    }

    private attachConfig<T>(config: Config, componentRef: ComponentRef<T>) {
        const inputs = config.inputs;

        if (inputs) {
            Object.keys(inputs).forEach(index => componentRef.instance[index] = inputs[index]);
        }

        (componentRef.instance as any).confirmation.subscribe(result => {
            this.closeModal();
        });

        // loop through output keys
        // for each
        // pass back to caller?
    }
}

export interface Config {
    inputs?: { [key: string]: any };
    outputs?: { [key: string]: any };
}

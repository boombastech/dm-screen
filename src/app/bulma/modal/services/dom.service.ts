import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DomService {
    private childComponentRef: any;

    constructor(
        private appRef: ApplicationRef,
    ) {
    }

    public appendComponentTo(childComponentRef: ComponentRef<any>) {
        // Create a component reference from the component

        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);

        // Get DOM element from component
        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // Append DOM element to the body
        document.getElementById('modal-container').appendChild(childDomElem);
        document.getElementsByTagName('html').item(0).classList.add('is-clipped');

    }

    public removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
        document.getElementsByTagName('html').item(0).classList.remove('is-clipped');
    }
}

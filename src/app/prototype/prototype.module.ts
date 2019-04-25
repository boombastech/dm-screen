import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../bulma/navbar/navbar.module';
import { MapsModule } from '../maps/maps.module';
import { PrototypeComponent } from './prototype.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StylesComponent } from './styles/styles.component';

@NgModule({
    declarations: [
        PrototypeComponent,
        SidebarComponent,
        StylesComponent,
    ],
    imports: [
        CommonModule,
        NavbarModule,
        MapsModule,
    ],
    entryComponents: [
        PrototypeComponent,
    ],
    exports: [
        PrototypeComponent,
    ],
})
export class PrototypeModule {
}

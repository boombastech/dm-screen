import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpcsWrapperComponent } from './components/npcs-wrapper/npcs-wrapper.component';
import { NpcsRoutingModule } from './npcs-routing.module';
import { NpcOverviewComponent } from './components/npc-overview/npc-overview.component';
import { NpcPreviewComponent } from './components/npc-preview/npc-preview.component';

@NgModule({
    declarations: [
        NpcsWrapperComponent,
        NpcOverviewComponent,
        NpcPreviewComponent,
    ],
    imports: [
        CommonModule,
        NpcsRoutingModule,
    ],
})
export class NpcsModule {
}

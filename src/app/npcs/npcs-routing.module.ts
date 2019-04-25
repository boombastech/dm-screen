import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpcOverviewComponent } from './components/npc-overview/npc-overview.component';
import { NpcsWrapperComponent } from './components/npcs-wrapper/npcs-wrapper.component';

const npcRoutes: Routes = [
    {
        path: 'npcs',
        component: NpcsWrapperComponent,
        children: [
            {
                path: ':id',
                component: NpcOverviewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(npcRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class NpcsRoutingModule {
}

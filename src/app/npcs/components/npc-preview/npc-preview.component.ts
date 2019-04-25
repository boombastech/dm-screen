import { Component, Input } from '@angular/core';
import { Npc } from '../../models/npc';

@Component({
    selector: 'app-npc-preview',
    templateUrl: './npc-preview.component.html',
    styleUrls: ['./npc-preview.component.sass'],
})
export class NpcPreviewComponent {
    @Input() npc: Npc;
}

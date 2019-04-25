import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcPreviewComponent } from './npc-preview.component';

describe('NpcPreviewComponent', () => {
  let component: NpcPreviewComponent;
  let fixture: ComponentFixture<NpcPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

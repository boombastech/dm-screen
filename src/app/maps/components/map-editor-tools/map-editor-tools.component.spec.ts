import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEditorToolsComponent } from './map-editor-tools.component';

describe('MapEditorToolsComponent', () => {
  let component: MapEditorToolsComponent;
  let fixture: ComponentFixture<MapEditorToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapEditorToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEditorToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

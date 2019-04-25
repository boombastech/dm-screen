import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcsWrapperComponent } from './npcs-wrapper.component';

describe('NpcsWrapperComponent', () => {
  let component: NpcsWrapperComponent;
  let fixture: ComponentFixture<NpcsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerContainerComponent } from './marker-container.component';

describe('MarkerContainerComponent', () => {
  let component: MarkerContainerComponent;
  let fixture: ComponentFixture<MarkerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

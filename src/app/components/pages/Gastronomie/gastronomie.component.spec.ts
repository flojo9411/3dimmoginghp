import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomieComponent } from './gastronomie.component';

describe('ServicedetailComponent', () => {
  let component: GastronomieComponent;
  let fixture: ComponentFixture<GastronomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

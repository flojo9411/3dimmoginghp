import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitekturComponent } from './architektur.component';

describe('ServicedetailComponent', () => {
  let component: ArchitekturComponent;
  let fixture: ComponentFixture<ArchitekturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitekturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitekturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

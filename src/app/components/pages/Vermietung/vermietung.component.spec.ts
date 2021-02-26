import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermietungComponent } from './vermietung.component';

describe('VermietungComponent', () => {
  let component: VermietungComponent;
  let fixture: ComponentFixture<VermietungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermietungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermietungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

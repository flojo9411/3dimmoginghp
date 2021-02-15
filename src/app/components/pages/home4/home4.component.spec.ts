import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4Component } from './home4.component';

describe('Home4Component', () => {
  let component: Home4Component;
  let fixture: ComponentFixture<Home4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
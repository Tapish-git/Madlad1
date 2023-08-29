import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masthead2Component } from './masthead2.component';

describe('Masthead2Component', () => {
  let component: Masthead2Component;
  let fixture: ComponentFixture<Masthead2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Masthead2Component]
    });
    fixture = TestBed.createComponent(Masthead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

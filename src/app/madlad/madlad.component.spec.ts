import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadladComponent } from './madlad.component';

describe('MadladComponent', () => {
  let component: MadladComponent;
  let fixture: ComponentFixture<MadladComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadladComponent]
    });
    fixture = TestBed.createComponent(MadladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

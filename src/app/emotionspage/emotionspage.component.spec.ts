import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionspageComponent } from './emotionspage.component';

describe('EmotionspageComponent', () => {
  let component: EmotionspageComponent;
  let fixture: ComponentFixture<EmotionspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionspageComponent]
    });
    fixture = TestBed.createComponent(EmotionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

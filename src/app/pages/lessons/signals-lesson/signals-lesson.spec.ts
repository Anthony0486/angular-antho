import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsLesson } from './signals-lesson';

describe('SignalsLesson', () => {
  let component: SignalsLesson;
  let fixture: ComponentFixture<SignalsLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

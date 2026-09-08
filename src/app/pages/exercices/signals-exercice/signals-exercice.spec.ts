import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsExercice } from './signals-exercice';

describe('SignalsExercice', () => {
  let component: SignalsExercice;
  let fixture: ComponentFixture<SignalsExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

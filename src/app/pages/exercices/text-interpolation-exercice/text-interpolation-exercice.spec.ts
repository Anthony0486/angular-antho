import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInterpolationExercice } from './text-interpolation-exercice';

describe('TextInterpolationExercice', () => {
  let component: TextInterpolationExercice;
  let fixture: ComponentFixture<TextInterpolationExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInterpolationExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInterpolationExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

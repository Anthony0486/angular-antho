import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForExercice } from './for-exercice';

describe('ForExercice', () => {
  let component: ForExercice;
  let fixture: ComponentFixture<ForExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ForExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

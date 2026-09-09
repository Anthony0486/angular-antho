import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionnalRenderExercice } from './conditionnal-render-exercice';

describe('ConditionnalRenderExercice', () => {
  let component: ConditionnalRenderExercice;
  let fixture: ComponentFixture<ConditionnalRenderExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionnalRenderExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionnalRenderExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

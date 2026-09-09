import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayBindingExercice } from './two-way-binding-exercice';

describe('TwoWayBindingExercice', () => {
  let component: TwoWayBindingExercice;
  let fixture: ComponentFixture<TwoWayBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

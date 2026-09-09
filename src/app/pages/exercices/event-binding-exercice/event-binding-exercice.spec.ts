import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBindingExercice } from './event-binding-exercice';

describe('EventBindingExercice', () => {
  let component: EventBindingExercice;
  let fixture: ComponentFixture<EventBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(EventBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

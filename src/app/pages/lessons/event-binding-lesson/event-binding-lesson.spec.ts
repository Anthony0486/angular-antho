import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBindingLesson } from './event-binding-lesson';

describe('EventBindingLesson', () => {
  let component: EventBindingLesson;
  let fixture: ComponentFixture<EventBindingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(EventBindingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

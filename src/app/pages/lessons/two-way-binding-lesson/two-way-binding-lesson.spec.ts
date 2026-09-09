import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayBindingLesson } from './two-way-binding-lesson';

describe('TwoWayBindingLesson', () => {
  let component: TwoWayBindingLesson;
  let fixture: ComponentFixture<TwoWayBindingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

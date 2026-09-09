import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInterpolationLesson } from './text-interpolation-lesson';

describe('TextInterpolationLesson', () => {
  let component: TextInterpolationLesson;
  let fixture: ComponentFixture<TextInterpolationLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInterpolationLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInterpolationLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

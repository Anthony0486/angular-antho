import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributeBindingExercice } from './attribute-binding-exercice';

describe('AttributeBindingExercice', () => {
  let component: AttributeBindingExercice;
  let fixture: ComponentFixture<AttributeBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

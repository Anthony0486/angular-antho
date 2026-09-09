import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Evaluation1 } from './evaluation1';

describe('Evaluation1', () => {
  let component: Evaluation1;
  let fixture: ComponentFixture<Evaluation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evaluation1],
    }).compileComponents();

    fixture = TestBed.createComponent(Evaluation1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

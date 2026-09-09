import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant5 } from './composant-5';

describe('Composant5', () => {
  let component: Composant5;
  let fixture: ComponentFixture<Composant5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant5],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

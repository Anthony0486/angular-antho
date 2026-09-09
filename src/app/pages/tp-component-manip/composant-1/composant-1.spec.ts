import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant1 } from './composant-1';

describe('Composant1', () => {
  let component: Composant1;
  let fixture: ComponentFixture<Composant1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant1],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

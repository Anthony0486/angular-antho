import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant4 } from './composant-4';

describe('Composant4', () => {
  let component: Composant4;
  let fixture: ComponentFixture<Composant4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant4],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

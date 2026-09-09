import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant6 } from './composant-6';

describe('Composant6', () => {
  let component: Composant6;
  let fixture: ComponentFixture<Composant6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant6],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

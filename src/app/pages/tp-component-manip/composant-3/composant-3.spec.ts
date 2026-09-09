import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant3 } from './composant-3';

describe('Composant3', () => {
  let component: Composant3;
  let fixture: ComponentFixture<Composant3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant3],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

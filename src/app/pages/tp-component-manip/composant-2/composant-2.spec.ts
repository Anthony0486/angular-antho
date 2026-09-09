import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant2 } from './composant-2';

describe('Composant2', () => {
  let component: Composant2;
  let fixture: ComponentFixture<Composant2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant2],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

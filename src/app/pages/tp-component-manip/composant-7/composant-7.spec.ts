import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant7 } from './composant-7';

describe('Composant7', () => {
  let component: Composant7;
  let fixture: ComponentFixture<Composant7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant7],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

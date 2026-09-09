import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composant8 } from './composant-8';

describe('Composant8', () => {
  let component: Composant8;
  let fixture: ComponentFixture<Composant8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant8],
    }).compileComponents();

    fixture = TestBed.createComponent(Composant8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

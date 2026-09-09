import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeComp } from './fake-comp';

describe('FakeComp', () => {
  let component: FakeComp;
  let fixture: ComponentFixture<FakeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeComp],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

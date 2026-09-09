import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpComponentManip } from './tp-component-manip';

describe('TpComponentManip', () => {
  let component: TpComponentManip;
  let fixture: ComponentFixture<TpComponentManip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpComponentManip],
    }).compileComponents();

    fixture = TestBed.createComponent(TpComponentManip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

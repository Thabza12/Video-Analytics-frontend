import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoResultsComponent } from './algo-results.component';

describe('AlgoResultsComponent', () => {
  let component: AlgoResultsComponent;
  let fixture: ComponentFixture<AlgoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlgoResultsComponent } from './update-algo-results.component';

describe('UpdateAlgoResultsComponent', () => {
  let component: UpdateAlgoResultsComponent;
  let fixture: ComponentFixture<UpdateAlgoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlgoResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlgoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

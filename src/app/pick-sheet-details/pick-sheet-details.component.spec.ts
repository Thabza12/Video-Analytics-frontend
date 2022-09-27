import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSheetDetailsComponent } from './pick-sheet-details.component';

describe('PickSheetDetailsComponent', () => {
  let component: PickSheetDetailsComponent;
  let fixture: ComponentFixture<PickSheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickSheetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

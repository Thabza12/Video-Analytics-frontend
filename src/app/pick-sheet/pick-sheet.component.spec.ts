import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSheetComponent } from './pick-sheet.component';

describe('PickSheetComponent', () => {
  let component: PickSheetComponent;
  let fixture: ComponentFixture<PickSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

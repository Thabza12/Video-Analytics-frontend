import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePickSheetComponent } from './update-pick-sheet.component';

describe('UpdatePickSheetComponent', () => {
  let component: UpdatePickSheetComponent;
  let fixture: ComponentFixture<UpdatePickSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePickSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePickSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

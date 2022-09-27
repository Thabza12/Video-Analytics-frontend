import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPickSheetComponent } from './upload-pick-sheet.component';

describe('UploadPickSheetComponent', () => {
  let component: UploadPickSheetComponent;
  let fixture: ComponentFixture<UploadPickSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPickSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPickSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

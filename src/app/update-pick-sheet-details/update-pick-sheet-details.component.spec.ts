import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePickSheetDetailsComponent } from './update-pick-sheet-details.component';

describe('UpdatePickSheetDetailsComponent', () => {
  let component: UpdatePickSheetDetailsComponent;
  let fixture: ComponentFixture<UpdatePickSheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePickSheetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePickSheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

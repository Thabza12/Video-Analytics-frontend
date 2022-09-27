import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVideoResultsComponent } from './update-video-results.component';

describe('UpdateVideoResultsComponent', () => {
  let component: UpdateVideoResultsComponent;
  let fixture: ComponentFixture<UpdateVideoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVideoResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVideoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

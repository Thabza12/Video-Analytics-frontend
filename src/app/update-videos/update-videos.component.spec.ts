import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVideosComponent } from './update-videos.component';

describe('UpdateVideosComponent', () => {
  let component: UpdateVideosComponent;
  let fixture: ComponentFixture<UpdateVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

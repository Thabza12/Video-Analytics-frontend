import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseRestComponent } from './response-rest.component';

describe('ResponseRestComponent', () => {
  let component: ResponseRestComponent;
  let fixture: ComponentFixture<ResponseRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

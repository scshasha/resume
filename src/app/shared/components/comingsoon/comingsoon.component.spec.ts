import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComingsoonComponent } from './comingsoon.component';

describe('ComingsoonComponent', () => {
  let component: ComingsoonComponent;
  let fixture: ComponentFixture<ComingsoonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

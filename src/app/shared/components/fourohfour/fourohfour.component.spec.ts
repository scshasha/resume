import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FourohfourComponent } from './fourohfour.component';

describe('FourohfourComponent', () => {
  let component: FourohfourComponent;
  let fixture: ComponentFixture<FourohfourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FourohfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourohfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

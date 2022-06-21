import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarnavComponent } from './sidebarnav.component';

describe('SidebarnavComponent', () => {
  let component: SidebarnavComponent;
  let fixture: ComponentFixture<SidebarnavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

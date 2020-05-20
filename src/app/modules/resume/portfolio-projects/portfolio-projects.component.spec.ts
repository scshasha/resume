import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

describe('WorkComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

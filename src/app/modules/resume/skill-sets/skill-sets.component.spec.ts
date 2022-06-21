import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillSetsComponent } from './skill-sets.component';

describe('SkillsComponent', () => {
  let component: SkillSetsComponent;
  let fixture: ComponentFixture<SkillSetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

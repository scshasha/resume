import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroHeroComponent } from './intro-hero.component';

describe('WelcomeComponent', () => {
  let component: IntroHeroComponent;
  let fixture: ComponentFixture<IntroHeroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

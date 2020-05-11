import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroHeroComponent} from './intro-hero/intro-hero.component';
import {PortfolioProjectsComponent} from './portfolio-projects/portfolio-projects.component';
import {ResumeComponent} from './resume.component';
import {ConnectComponent} from './connect/connect.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SkillSetsComponent} from './skill-sets/skill-sets.component';



@NgModule({
  declarations: [
    IntroHeroComponent,
    ResumeComponent,
    IntroHeroComponent,
    ConnectComponent,
    AboutMeComponent,
    SkillSetsComponent,
    PortfolioProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroHeroComponent,
    ResumeComponent,
    IntroHeroComponent,
    ConnectComponent,
    AboutMeComponent,
    SkillSetsComponent,
    PortfolioProjectsComponent
  ],
  providers: [

  ]
})
export class ResumeModule { }

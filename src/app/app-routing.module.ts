import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './modules/resume/about-me/about-me.component';
import { SkillSetsComponent } from './modules/resume/skill-sets/skill-sets.component';
import { ConnectComponent } from './modules/resume/connect/connect.component';
import { PortfolioProjectsComponent } from './modules/resume/portfolio-projects/portfolio-projects.component';
import { FourohfourComponent } from './modules/pages/fourohfour/fourohfour.component';
import { ComingsoonComponent } from './modules/pages/comingsoon/comingsoon.component';
import {ResumeComponent} from './modules/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  },
  {
    path: 'developments',
    component: PortfolioProjectsComponent
  },
  {
    path: 'skillsets',
    component: SkillSetsComponent
  },
  {
    path: 'sayhi',
    component: ConnectComponent
  },
  {
    path: 'comingsoon',
    component: ComingsoonComponent
  },
  {
    path: 'notfound',
    component: FourohfourComponent
  },
  {
    path: 'xyz',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module')
      .then(m => m.AdminDashboardModule)
  },

  /** otherwise redirect to 404 */
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

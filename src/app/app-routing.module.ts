import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './modules/resume/about-me/about-me.component';
import { SkillSetsComponent } from './modules/resume/skill-sets/skill-sets.component';
import { ConnectComponent } from './modules/resume/connect/connect.component';
import { PortfolioProjectsComponent } from './modules/resume/portfolio-projects/portfolio-projects.component';
import { FourohfourComponent } from './shared/components/fourohfour/fourohfour.component';
import { ComingsoonComponent } from './shared/components/comingsoon/comingsoon.component';
import {ResumeComponent} from './modules/resume/resume.component';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {ProjectListComponent} from "./modules/pages/projects/components/project-list/project-list.component";
import {ProjectFormComponent} from "./modules/pages/projects/components/project-form/project-form.component";

const routes: Routes = [{
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
  {
    path: 'manage',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'projects',
      component: ProjectListComponent
    }, {
      path: 'projects/new',
      component: ProjectFormComponent
    }, {
      path: 'projects/edit/:id',
      component: ProjectFormComponent
    }]
  },

  /** otherwise redirect to 404 */
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }, {
  path: 'dashboard',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

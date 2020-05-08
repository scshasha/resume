import { ProjectFormComponent } from './../projects/components/project-form/project-form.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {ProjectListComponent} from "../projects/components/project-list/project-list.component";
import {SkillsetListComponent} from "../skillsets/components/skillset-list/skillset-list.component";


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'projects',
        component: ProjectListComponent
      },
      {
        path: 'projects/new',
        component: ProjectFormComponent
      },
      {
        path: 'projects/edit/:id',
        component: ProjectFormComponent
      },
      {
        path: 'skills',
        component: SkillsetListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

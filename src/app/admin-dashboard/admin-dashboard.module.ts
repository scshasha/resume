import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProjectsModule } from '../projects/projects.module';
import { SkillsetsModule } from '../skillsets/skillsets.module';
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
  declarations: [AdminDashboardComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ProjectsModule,
    MaterialModule
  ]
})
export class AdminDashboardModule { }

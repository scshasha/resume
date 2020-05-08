import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectListComponent,
    ProjectFormComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectsModule { }

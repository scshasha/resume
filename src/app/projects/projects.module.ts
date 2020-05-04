import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { ProjectListComponent } from './components/project-list/project-list.component';


@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
  	ProjectListComponent
  ]
})
export class ProjectsModule { }

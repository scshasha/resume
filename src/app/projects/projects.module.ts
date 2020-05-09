import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import {ConfirmDelDialogComponent} from './components/project-list/confirm-del-dialog.component';
import {MatDialogRef} from '@angular/material/dialog';


@NgModule({
  declarations: [ProjectListComponent, ProjectFormComponent, ConfirmDelDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectListComponent,
    ProjectFormComponent,
    ConfirmDelDialogComponent
  ],
  providers: [
    ProjectService,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class ProjectsModule { }

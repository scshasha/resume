import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import { MaterialModule } from '../../../shared/modules/material.module';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import {DeleteConfirmationDialogComponent} from './components/project-list/dialogs/delete/delete-confirmation-dialog.component';
import {ProjectDetailsDialogComponent} from './components/project-list/dialogs/details/project-details-dialog.component';
import { FileUploadComponent } from './components/project-form/file-upload/file-upload.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectFormComponent,
    DeleteConfirmationDialogComponent,
    ProjectDetailsDialogComponent,
    FileUploadComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule
    ],
  exports: [
    ProjectListComponent,
    ProjectFormComponent,
    DeleteConfirmationDialogComponent,
    ProjectDetailsDialogComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from '../../shared/modules/material.module';
import {ProjectService} from '../../modules/pages/projects/services/project.service';
import {MatDialogRef} from '@angular/material/dialog';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [],
  providers: [
    ProjectService,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class DefaultModule { }

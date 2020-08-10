import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './components/footer-dashboard/footer-dashboard.component';
import {SidebarnavComponent} from './components/sidebarnav/sidebarnav.component';
import {MaterialModule} from './modules/material.module';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
import { CalenderComponent } from './widgets/calender/calender.component';



@NgModule({
  declarations: [
    HeaderDashboardComponent,
    FooterDashboardComponent,
    SidebarnavComponent,
    CalenderComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderDashboardComponent,
    SidebarnavComponent,
    FooterDashboardComponent,
    CalenderComponent,
    PieChartComponent
  ],
  providers: []
})
export class SharedModule { }

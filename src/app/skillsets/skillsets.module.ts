import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { SkillsetListComponent } from './components/skillset-list/skillset-list.component';



@NgModule({
  declarations: [SkillsetListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
  	SkillsetListComponent
  ]
})
export class SkillsetsModule { }

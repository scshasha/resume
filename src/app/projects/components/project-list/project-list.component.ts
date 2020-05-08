import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../../models/project';
import { ProjectService } from './../../services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'category', 'created', 'updated', 'action'];
  public dataSource: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  newProjectHandler() {
    this.router.navigate(['xyz', 'projects','new']);
  }

  ngOnInit(): void {
    this.projectService
    .getProjets()
    .subscribe(data => {
      this.dataSource = data;
      console.log(data);
    },err => {
      console.log(err)
    })
  }





}

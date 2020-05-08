import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { remove } from 'lodash';

import { Project } from './../../models/project';
import { ProjectService } from './../../services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.projectService
    .getProjets()
    .subscribe(data => {
      this.dataSource = data;
    },err => this.handleError(err, 'Whoops, failed to fetch project list!'))
  }

  private handleError(err: any, message: string): void {
    console.log(err);
    this.snackBar.open(
      message, 'Error', {
        duration: 4000
      }
    );
  }

  createProjectActionHandler() {
    this.router.navigate(['xyz', 'projects','new']);
  }

  updateProjectActionHandler(id: string) {
    this.router.navigate(['xyz', 'projects', 'edit', id]);
  }

  deleteProjectActionHandler(id: string) {
    console.log(id);
    this.projectService.deleteProject(id)
    .subscribe(data => {
      const removedItem = remove(this.dataSource, (item) => {
        return item._id === data._id;
      });
      this.dataSource = [...this.dataSource]; /** Tells Angular to update variable. */
      this.snackBar.open('Project deleted!', 'Success', {
        duration: 8000
      });
    },err => this.handleError(err, 'Whoops, failed to delete project!')
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {remove} from 'lodash';

import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {DeleteConfirmationDialogComponent} from './dialogs/delete/delete-confirmation-dialog.component';
import {ProjectDetailsDialogComponent} from './dialogs/details/project-details-dialog.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'category', 'created', 'updated', 'action'];
  public dataSource: Project[] = [];
  private confirmDelete = '';

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.projectService
    .getProjets()
    .subscribe(data => {
      this.dataSource = data;
    }, err => this.handleError(err, 'Whoops, failed to fetch project list!'));
  }

  private handleError(err: any, message: string): void {
    this.snackBar.open(
      message, 'Error', {
        duration: 4000
      }
    );
  }

  createProjectActionHandler() {
    this.router.navigate(['xyz', 'projects', 'new']);
  }

  updateProjectActionHandler(id: string) {
    this.router.navigate(['xyz', 'projects', 'edit', id]);
  }

  deleteProjectActionHandler(id: string) {
    const confirmationDialog = this.dialog.open(DeleteConfirmationDialogComponent, {
        width: '350px',
      }
    );
    confirmationDialog.afterClosed().subscribe(result => {
      // @todo Improve this check... Someone can hack its html attrib to pass this check
      if (typeof result === 'string' && result === 'true') {
        // User has confirmed to delete this item
        this.projectService.deleteProject(id)
          .subscribe(data => {
              const removedItem = remove(this.dataSource, (item) => {
                return item._id === data._id;
              });
              this.dataSource = [...this.dataSource]; /** Tells Angular to update variable. */
              this.snackBar.open('Project deleted!', 'Success', {
                duration: 4000
              });
            }, err => this.handleError(err, 'Whoops, failed to delete project!')
          );
      }
    });

  }
  viewProjectActionHandler(id: string): void {
    // @todo View project details on a modal
    // const viewProjectDetailsDialog = this.dialog.open(ProjectDetailsDialogComponent, {
    //   width: '100%'
    // });
    let selected = null;
    this.dataSource.forEach(project => {
      if (id === project._id) {
        selected = project;
      }
    });
    if (selected) {
      const dialogRef = this.dialog.open(ProjectDetailsDialogComponent, {
        data: selected
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  }
}



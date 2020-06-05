import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ProjectService} from '../pages/projects/services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private projectCount: any = 0; // @todo: Change type to integer...

  constructor(private projectService: ProjectService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.projectService.getProjets().subscribe(data => {
      this.projectCount = data.length;
    }, err => this.handleError(err, 'Whoops, the backend service is not responding!'));
  }

  private handleError(err: any, message: string): void {
    this.snackBar.open(
      message, 'Error', {
        duration: 4000
      }
    );
  }

  ngAfterViewInit() {
    console.error(this.p);
  }


}

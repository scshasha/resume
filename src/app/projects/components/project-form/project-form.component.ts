import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from './../../services/project.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.projectService.createProject(this.projectForm.value)
    .subscribe(data => {
      this.snackBar.open('Project created successfully!', 'Success', {
        duration: 8000
      });
      this.projectForm.reset();

      this.router.navigate(['xyz', 'projects']);
    },err => {
      console.error(err);
    });
  }

  onCancel() {
    this.router.navigate(['xyz', 'projects']);
  }

  editProject() {

  }

  createForm() {
    this.projectForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      url: null,
      thumbnail: null,
      category: [null, Validators.required],
      created_at: null,
      updated_at: null,
    });
  }

}

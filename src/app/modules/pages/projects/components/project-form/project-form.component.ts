import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _project: Project;
  projectForm: FormGroup;
  progress = 0;
  selectedFile = null;
  screenshotPreview = null;
  formStepper = 1;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.setEditableFormData();
  }

  onSubmit() {
    // console.log(this.selectedFile);
    // return;

    if (this._project) {
      this.projectService.updateProject(this._project._id, this.projectForm.value).subscribe(
        data => {
          this.snackBar.open('Project updated!', 'Success', {
            duration: 4000
          });
          this._gotolist();
        }, err => this.handleError(err, 'Whoops, failed to update project!')
      );
    }
    else {
      this.projectService.createProject(this.projectForm.value)
      .subscribe(data => {
        this.snackBar.open('Project created!', 'Success', {
          duration: 4000
        });
        this._gotolist();
      }, err => this.handleError(err, 'Whoops, failed to create project!'));
    }

  }


  onCancel() {
    this.router.navigate(['manage', 'projects']);
  }

  private _gotolist() {
    this.projectForm.reset();
    this.router.navigate(['manage', 'projects']);
  }

  private initForm() {
    this.projectForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      url: null,
      thumbnail: null,
      category: [null, Validators.required],
      created_at: null,
      updated_at: null,
      image: File
    });
  }

  private handleError(err: any, message: string): void {
    this.snackBar.open(
      message, 'Error', {
        duration: 4000
      }
    );
  }

  private setEditableFormData() {
    this.route.params.subscribe(
      params => {
        const id = params.id;
        if (!id) {
          return;
        }
        this.projectService.getProjetById(id).subscribe(
          data => {
            this._project = data;
            this.projectForm.patchValue(this._project);
          }, err => this.handleError(err, 'Whoops, failed to fetch project!')
        );
      }
    );

  }

  onFileChange(event) {
    const file: File = event;
    if (file) {
      // @ts-ignore
      this.projectForm.image = file;
      const r = new FileReader();
      r.readAsDataURL(file);
      r.onload = (e) => {
        this.screenshotPreview = r.result;
      };
    }
  }
}

export function requiredFileType( type: string ) {
  return (control: FormControl) => {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}

import { LaraService } from './../../../_services/lara.service';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-response',
  templateUrl: './reset-response.component.html',
  styleUrls: ['./reset-response.component.scss']
})
export class ResetResponseComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private _app_title: Title,
    private _route: ActivatedRoute,
    private Lara: LaraService
  ) {
    
    this._app_title.setTitle('Reset Password · Christopher');
    
    _route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  
  }

  ngOnInit(): void {
    this._app_title.setTitle('Reset Password · Christopher');
  }

  onSubmit() {
    this.Lara.changePassword(this.form).subscribe((data) => {
    this.handleResponse(data);
    }, (error) => {
      this.handleError(error);
    })
  }


  handleResponse(data) {
    console.log(data);
  }

  handleError(error) {
    console.log(error);
  }

}

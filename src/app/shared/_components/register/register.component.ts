import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { LaraService } from '../../_services/lara.service';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  error = {
    name: null,
    email: null,
    password: null
  };

  constructor(
    private Token: TokenService,
    private Lara: LaraService,
    private appRouter: Router,
    private appTitle: Title
  ) {
    this.appTitle.setTitle('Sign Up · Christopher');
  }

  ngOnInit(): void {
    this.appTitle.setTitle('Sign Up · Christopher');
  }

  handleErrors(error) {
    console.log(error.error);
    this.error = error.error.errors;
  }

  onSubmit() {
    this.Lara.signUp(this.form).subscribe(
        data => this.responseHandler(data),
        error => this.handleErrors(error)
      );
  }
  responseHandler(data) {
    this.Token.handle(data.access_token);
    this.appRouter.navigateByUrl('/admin');
  }

}

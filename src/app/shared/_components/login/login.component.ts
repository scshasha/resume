import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LaraService } from '../../_services/lara.service';
import { TokenService } from '../../_services/token.service';
import {AuthService} from '../../_services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  };

  error = null;

  constructor(
    private Token: TokenService,
    private Lara: LaraService,
    private Auth: AuthService,
    private appRouter: Router,
    private appTitle: Title
  ) {
    this.appTitle.setTitle('Sign In · Christopher');
  }

  ngOnInit(): void {
    this.appTitle.setTitle('Sign In · Christopher');
  }

  errorHandler(error) {
    this.error = error.error.error;
  }

  responseHandler(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.appRouter.navigateByUrl('/admin');
  }


  onSubmit() {
    this.Lara.signIn(this.form).subscribe(
      data => this.responseHandler(data),
      error => this.errorHandler(error)
    );
  }

}

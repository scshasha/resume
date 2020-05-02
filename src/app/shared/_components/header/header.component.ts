import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private appTitle: Title,
    private appRouter: Router,
    private Auth: AuthService,
    private Token: TokenService
  ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(val => this.isLoggedIn = val);
  }

  setAppTitle(title: string) {
    this.appTitle.setTitle(title);
  }

  logout($event: MouseEvent) {
    $event.preventDefault();

    this.Token.del(); // remove token
    this.Auth.changeAuthStatus(false); // change status to false
    this.appRouter.navigateByUrl('/user/login'); // go to the login page/view
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuardService {

  constructor(
    private Auth: AuthService,
    private appRouter: Router,
    private Token: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.Token.loggedIn());
    if (typeof this.Token.loggedIn() === 'undefined' && !this.Token.loggedIn()) { return true; }
    else if (!this.Token.loggedIn()) { return true; }
    else { this.appRouter.navigate(['administrator']); }
  }

}

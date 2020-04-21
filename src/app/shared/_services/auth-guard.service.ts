import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService   implements CanActivate{

  constructor(
    private Auth: AuthService,
    private Token: TokenService,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(typeof this.Token.loggedIn() === 'boolean' && this.Token.loggedIn() === true) {
      return true;
    } else if (this.Token.loggedIn() === true) {
      return true;
    } else {
      this._router.navigate(['user/login']);
    }
  }
}

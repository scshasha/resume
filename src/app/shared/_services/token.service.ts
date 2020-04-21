import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: `${environment.base_api}/login`,
    signup: `${environment.base_api}/signup`
  }

  constructor() { }

  handle(token) {
    this.set(token);
    console.log(this.validate());
  }

  get() {
    return localStorage.getItem('user_token');
  }

  set(token) {
    localStorage.setItem('user_token', token);
  }

  del() {
    localStorage.removeItem('user_token');
  }

  validate() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return (Object.values(this.iss).indexOf(payload.iss) > -1);
      }
    }
  }

  loggedIn() {
    return this.isValidToken();
  }

  isValidToken() {
    return this.validate();
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LaraService {

  public error = [];

  constructor(private http: HttpClient) { }

  handleErrors(error) {
    console.log('...', error.error);

    switch (error.status) {
      case 401:
        this.error = error.error.error;
        break;
      default:
        this.error = error.error.errors;
    }

    return this.error;
  }

  signIn(formData) {
    return this.http.post(`${environment.base_api}/login`, formData);
  }

  signUp(formData) {
    return this.http.post(`${environment.base_api}/signup`, formData);
  }

  sendPasswordResetLink(email) {
    return this.http.post(`${environment.base_api}/passwordResetLink`, email);
  }

  changePassword(formData) {
    return this.http.post(`${environment.base_api}/resetPassword`, formData);
  }
}

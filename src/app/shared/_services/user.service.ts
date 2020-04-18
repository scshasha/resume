import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {User} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.base_api}/users`);
  }

  registerUser(user: User) {
    return this.http.post(`${environment.base_api}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.base_api}/users/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from './../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjets(): Observable<Project[]>{
  	return this.http.get<Project[]>(`${environment.base_api_url}projects`);
  }

  getProjetById(_id: any): Observable<Project>{
  	return this.http.get<Project>(`${environment.base_api_url}project/${_id}`);
  }

  createProject(body: Project): Observable<Project>{
    return this.http.post<Project>(`${environment.base_api_url}/projects`, body);
  }

  // updateProject(id: Project): Observable<Project>{
  //   return this.http.post<Project>(`${environment.base_api_url}/projects`, body);
  // }
}

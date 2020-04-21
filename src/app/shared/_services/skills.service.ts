import { Injectable } from '@angular/core';
import { Skill } from "../_models/skill.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private http: HttpClient,
    private Auth: AuthService
  ) { }

  private skills = [
    new Skill('WordPress / Joomla / Drupal', 6),
    new Skill('Angular2 / React / Node', 4),
    new Skill('C# / C++ / Java / .NET', 3),
    new Skill('PHP / Laravel / Symfony', 8),
    new Skill('AWS EC2 / Acquia / Pantheon ', 5),
    new Skill('npm / Composer / Git / BitBucket', 6),
  ];

  get() {
    // return this.http.get(`${environment.base_api}/skills`, {});
    return this.skills;
  }

  store(formData) {
    if (this.Auth.isAuthenticated()) {
      // Proceed to save.
      console.log('Authorized to add new skill...');
    }
  }


}

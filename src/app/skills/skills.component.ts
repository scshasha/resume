import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/_models/skill.model';
import {SkillsService} from "../shared/_services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skills = [];

  constructor(
    private skillService: SkillsService
  ) {
    this.loadSkills();
  }

  ngOnInit(): void {
  }

  loadSkills() {
    // this.skillService.get().subscribe((response: any) => {
    //   console.log(response);
    //   this.skills = response;
    // });

    this.skills = this.skillService.get();
  }

}

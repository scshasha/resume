import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/models/skill.model';
import {SkillsService} from '../../../shared/services/skills.service';

@Component({
  selector: 'app-skill-sets',
  templateUrl: './skill-sets.component.html',
  styleUrls: ['./skill-sets.component.scss']
})
export class SkillSetsComponent implements OnInit {
  public skills = [];

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

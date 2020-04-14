import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any = [
    new Skill('Angular', 45),
    new Skill('Docker', 57),
    new Skill('PHP', 78),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

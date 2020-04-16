import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    new Skill('WordPress / Joomla / Drupal', 6),
    new Skill('Angular2 / React / Node', 4),
    new Skill('C# / C++ / Java / .NET', 3),
    new Skill('PHP / Laravel / Symfony', 8),
    new Skill('AWS EC2 / Acquia / Pantheon ', 5),
    new Skill('npm / Composer / Git / BitBucket', 6),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

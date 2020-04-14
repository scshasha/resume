import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://media-exp1.licdn.com/dms/image/C4D0BAQEemBOsuam-ug/company-logo_200_200/0?e=2159024400&v=beta&t=V1NPoRa3sQ9GpHlFBGJRWO4rVzu5y4iRmpwToug3Zf0',
      `https://tipi.london`,
      3),
    new Project(
      'Marty\'s',
      'Marty\'s re-brand',
      'https://s3-eu-west-1.amazonaws.com/martysuniverse-site-assets/wp-content/uploads/2019/10/16152725/martys_adventure1.jpg',
      'https://www.martysuniverse.com/',
      2
    ),
  ];

  categories: any = [
    'Mobile', 'Drupal', 'Web', 'AWS', 'Design', 'WordPress', 'Email Templates'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  filterByCategory(id: number): void {
    const tempArray = [];

    this.projects.forEach((project) => {
      // tslint:disable-next-line:triple-equals
      if (project.category == this.categories[id]) {
        tempArray.push(project);
      }
    });

    this.projects = tempArray;
  }

}

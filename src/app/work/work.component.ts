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
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      3),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      3),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      5),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      4),
  ];

  filterData: Project[] = [
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      3),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      3),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      5),
    new Project(
      'Tipi',
      'An Angular2 and Drupal decoupled website',
      'https://www.bonline.co.za/wp-content/uploads/2018/10/Luxity3-2.jpg',
      `https://tipi.london`,
      4),
  ];


  categories: any = [
    'All', 'Mobile', 'Drupal', 'WordPress', 'Angular', 'Design'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * filterByCategory
   * Filters projects and returns those that match the selection.
   *
   * @param id
   * @return void|
   */
  filterByCategory(id: number): void {
    const tempArray = [];

    // tslint:disable-next-line:triple-equals
    this.filterData.forEach((project) => {
      if (project.category == this.categories[id]) {
        tempArray.push(project);
      }
    });

    this.projects = [];

    if (id === 0) {
      this.projects = this.filterData;
    } else {
      this.projects = tempArray;
    }

  }

}

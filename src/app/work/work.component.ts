import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/_models/project.model';
import {ProjectsService} from "../shared/_services/projects.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public projects = [];
  private readonly filterData: any = [];
  private readonly categories: any = [
    'All', 'Drupal', 'WordPress', 'Angular', '.Net', 'Adobe'
  ];
  
  constructor(
    private projectsService: ProjectsService
  ) {
    this.loadProjects();
    this.filterData = this.randomizeData(this.projects);
    console.log(this.filterData);
  }

  ngOnInit(): void {
  }

  loadProjects() {
    this.projects = this.projectsService.get();
    // @todo Subscribe to service.
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
      this.projects = this.randomizeData(tempArray);
    }

  }

  /**
   * randomizeData
   * Randomly shuffles data
   *
   * @param data
   * @return array
   */
  randomizeData(data: any) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

}

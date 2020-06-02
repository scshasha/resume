import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss'],
})
export class PortfolioProjectsComponent implements OnInit {
  public projects = [];
  public filterData = [];
  public readonly categories: any = ['All', 'Drupal', 'WordPress', 'Angular'];

  constructor(private projectsService: ProjectsService) {
    this.loadProjects();
    this.filterData = this.randomizeData(this.projects);
  }

  ngOnInit(): void {}

  loadProjects() {
    this.projects = this.projectsService.get();
    // @todo Subscribe to service.
  }

  /**
   * filterByCategory
   * Filters projects and returns those that match the selection.
   * @return void|
   */
  filterByCategory(id: number): void {
    const tempArray = [];

    // tslint:disable-next-line:triple-equals
    this.filterData.forEach((project) => {
      if (project.category === this.categories[id]) {
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
   * Shuffles data
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

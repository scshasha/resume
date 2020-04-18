import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/_models/project.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Meanz Tailers',
      'MenzTailor is an impressive free bespoke tailor website template that specializes in male fashion. It is a stunning site canvas that instantly triggers everyone’s attention.',
      'assets/uploads/thumbnails/screenshot-1.png',
      ``,
      2),
    new Project(
      'Glint',
      'Glint is a clean and minimal one page HTML website template.',
      'assets/uploads/thumbnails/screenshot-2.png',
      ``,
      2),
    new Project(
      'Amin',
      'Amin is an impactful free gaming magazine website template with a fully responsive dark layout.',
      'assets/uploads/thumbnails/screenshot-3.png',
      ``,
      2),
    new Project(
      'Physical Therapy',
      'Physical Therapy is a jaw-dropping, modern and lightweight free website template that you can use for physiotherapy, chiropractor and other massage services.',
      'assets/uploads/thumbnails/screenshot-4.png',
      ``,
      2),
    new Project(
      'Pivot',
      'With a free responsive construction website template, like Pivot, you can establish a solid online presence for your business.',
      'assets/uploads/thumbnails/screenshot-5.png',
      ``,
      2),
    new Project(
      'OWL',
      'It is an exclusively crafted Drupal business template that serves food industry ideally.',
      'assets/uploads/thumbnails/screenshot-6.png',
      ``,
      1),
    new Project(
      'Unix',
      'Unix is definitely the ultimate solution for your web design needs when it comes to building educational and online courses websites.',
      'assets/uploads/thumbnails/screenshot-7.png',
      ``,
      1),
    new Project(
      'Creative Tim',
      'Angular admin dashboard template.',
      'assets/uploads/thumbnails/screenshot-8.png',
      ``,
      3),
    new Project(
      'Dexam',
      'Angular website',
      'assets/uploads/thumbnails/screenshot-9.png',
      ``,
      3),
    new Project(
      'Pogody',
      'Angular website template',
      'assets/uploads/thumbnails/screenshot-10.png',
      ``,
      3),
    new Project(
      'Altair',
      'Altair is a an extremely well developed, thoroughly professional, clean and businesslike, technologically dominant, modern and reliable, highly interactive, extraordinarily customizable and visually stunning WordPress responsive Material Design Angular template',
      'assets/uploads/thumbnails/screenshot-11.png',
      ``,
      3),
  ];

  filterData: any = [];


  categories: any = [
    'All', 'Drupal', 'WordPress', 'Angular', '.Net', 'Adobe'
  ];
  constructor() {
    this.filterData = this.randomizeData(this.projects);
    console.log(this.filterData);
  }

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

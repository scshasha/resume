import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";
import {Project} from "../_models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private Auth: AuthService
  ) { }
  private projects = [
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
    new Project(
      'BafanaWebs&Graphics Agency',
      'Logo Design',
      'assets/uploads/thumbnails/screenshot-12.png',
      ``,
      5),
  ];




  get() {
    return this.projects;
  }

  store(formData) {
    if (this.Auth.isAuthenticated()) {
      // Proceed to save.
      console.log('Authorized to add new project...');
    }
  }

}

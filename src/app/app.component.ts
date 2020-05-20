import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chris-shasha';
  router: Router;

  private readonly ignoreFooterOrHeaderForRoute = [
    '/manage',
    '/admin',
    '/xyz'
  ];

  // tslint:disable-next-line:variable-name
  constructor(private appTitleService: Title, private appRouter: Router) {
  }

  includeHeader(): boolean {
    return false;
    console.log(this.ignoreFooterOrHeaderForRoute);
    this.ignoreFooterOrHeaderForRoute.forEach(route => {
      const r = '\'' + route + '\'';
      if (this.appRouter.url.includes(r)) {
        console.log(this.appRouter.url);
        console.log(route);
        return false;
      }
    }); // This doesn't work... Why?? @todo: Fix
    switch (this.appRouter.url) {
      case '/page-not-found':
      case '/manage':
      case '/admin':
      case '/xyz':
        return false;
    }
    return true;
  }

  includeFooter(): boolean {
    return false;
    switch (this.appRouter.url) {
      case '/manage':
      case '/admin':
      case '/xyz':
        return false;
    }
    return true;
  }

  setAppTitle(title: string) {
    this.appTitleService.setTitle(title);
  }

}

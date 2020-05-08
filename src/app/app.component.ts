import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chris-shasha';
  router: Router;

  // tslint:disable-next-line:variable-name
  constructor(private appTitleService: Title, private appRouter: Router) {
  }

  includeHeader() {
    /** @todo find an effecient way to do this */
    switch (this.appRouter.url) {
      case '/page-not-found':
      case '/xyz':
      case '/xyz/projects':
      case '/xyz/projects/new':
      case '/xyz/skills':
        return false;
      default:
        return true;
    }
  }

  includeFooter() {
    switch (this.appRouter.url) {
      case '/user/login':
      case '/user/new':
      case '/reset/request':
      case '/administrator':
      case '/xyz':
      case '/xyz/projects':
      case '/xyz/projects/new':
      case '/xyz/skills':
        return false;
      default:
        return true;
    }
  }



  setAppTitle(title: string) {
    this.appTitleService.setTitle(title);
  }

}

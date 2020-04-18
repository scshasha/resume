import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chris-shasha';

  constructor(private appTitleService: Title) { }

  setAppTitle(title: string) {
    this.appTitleService.setTitle(title);
  }

}

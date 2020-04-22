import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private appTitleService: Title) {
    this.setAppTitle('Chris: Web Developer');
  }

  setAppTitle(title: string) {
    this.appTitleService.setTitle(title);
  }

  ngOnInit(): void {
  }

}

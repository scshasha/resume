import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-intro-hero',
  templateUrl: './intro-hero.component.html',
  styleUrls: ['./intro-hero.component.scss']
})
export class IntroHeroComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appTitleService: Title) { }

  ngOnInit(): void {
  }

  setAppTitle(title: string) {
    this.appTitleService.setTitle(title);
  }

}

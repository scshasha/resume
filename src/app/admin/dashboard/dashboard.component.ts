import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _app_title: Title
  ) {
    this._app_title.setTitle('Administrator · Christopher');
  }

  ngOnInit(): void {
    this._app_title.setTitle('Administrator · Christopher');
  }

}

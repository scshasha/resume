import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {

  constructor(
    private _app_title: Title
  ) {
    this._app_title.setTitle('Request Reset Password · Christopher');
  }

  ngOnInit(): void {
    this._app_title.setTitle('Request Password Reset · Christopher');
  }

}

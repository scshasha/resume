import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-reset-response',
  templateUrl: './reset-response.component.html',
  styleUrls: ['./reset-response.component.scss']
})
export class ResetResponseComponent implements OnInit {

  constructor(
    private _app_title: Title
  ) {
    this._app_title.setTitle('Reset Password · Christopher');
  }

  ngOnInit(): void {
    this._app_title.setTitle('Reset Password · Christopher');
  }

}

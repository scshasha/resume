import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LaraService} from "../../../_services/lara.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
  constructor(
    private _app_title: Title,
    private _notify: SnotifyService,
    private Lara: LaraService
  ) {
    this._app_title.setTitle('Request Reset Password · Christopher');
  }
  public form = {
    email: null
  }

  ngOnInit(): void {
    this._app_title.setTitle('Request Password Reset · Christopher');
  }
  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }
  onSubmit() {
    this.Lara.sendPasswordResetLink(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this._notify.error(error.error.error)
    );
  }

}

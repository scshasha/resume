import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {LaraService} from '../../../_services/lara.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
  constructor(
    private appTitle: Title,
    private appNotificationService: SnotifyService,
    private Lara: LaraService
  ) {
    this.appTitle.setTitle('Request Reset Password · Christopher');
  }
  public form = {
    email: null
  };

  ngOnInit(): void {
    this.appTitle.setTitle('Request Password Reset · Christopher');
  }
  handleResponse(res) {
    this.form.email = null;
  }
  onSubmit() {
    this.Lara.sendPasswordResetLink(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.appNotifcationService.error(error.error.error)
    );
  }

}

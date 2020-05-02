import { SnotifyService } from 'ng-snotify';
import { LaraService } from '../../../_services/lara.service';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-response',
  templateUrl: './reset-response.component.html',
  styleUrls: ['./reset-response.component.scss']
})
export class ResetResponseComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  constructor(
    private appTitle: Title,
    private appRoute: ActivatedRoute,
    private Lara: LaraService,
    private appRouter: Router,
    private appNotificationService: SnotifyService
  ) {

    this.appTitle.setTitle('Reset Password · Christopher');

    appRoute.queryParams.subscribe(params => {
      this.form.resetToken = params.token;
    });

  }

  ngOnInit(): void {
    this.appTitle.setTitle('Reset Password · Christopher');
  }

  onSubmit() {
    this.Lara.changePassword(this.form).subscribe((data) => {
    this.handleResponse(data);
    }, (error) => {
      this.handleError(error);
    });
  }


  handleResponse(data) {
    const url = this.appRouter;

    this.appNotificationService.confirm('Reset successful! You may now login using your new password.', {
      buttons: [
        {
          text: 'Okay',
          action: toaster => {
            this.appNotificationService.remove(toaster.id),
            url.navigate(['/user/login']);
          }
        },
      ]
    });
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}

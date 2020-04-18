import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(public alertService: AlertService) { }


  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(msg => {
        switch (msg && msg.type) {
          case 'success':
            msg.cssClass = 'alert alert-dismissible fade show alert-success';
            break;
          case 'error':
            msg.cssClass = 'alert alert-dismissible fade show alert-danger';
            break;
        }
        this.message = msg;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer-dashboard',
  templateUrl: './footer-dashboard.component.html',
  styleUrls: ['./footer-dashboard.component.scss']
})
export class FooterDashboardComponent implements OnInit {

  public socials = {
    fb: environment.profile_url_facebook,
    ig: environment.profile_url_ig,
    in: environment.profile_url_linkedin,
    so: environment.profile_url_stackoverflow,
    cp: environment.profile_url_codepen,
    gl: environment.profile_url_gitlab,
    gh: environment.profile_url_github,
    em: environment.mail_to
  };

  constructor() { }

  ngOnInit(): void {
  }

}

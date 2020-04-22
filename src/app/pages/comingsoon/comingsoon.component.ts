import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {

  contactEmail: string = environment.mail_to;
  linkedinUrl: string = environment.profile_url_linkedin;
  githubUrl: string = environment.profile_url_github;
  stackoverflowUrl: string = environment.profile_url_stackoverflow;

  constructor(private appTitleService: Title) {
    appTitleService.setTitle('Coming soon · Christopher');
  }
  ngOnInit(): void {
  }

}

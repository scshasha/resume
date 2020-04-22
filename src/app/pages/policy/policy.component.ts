import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  constructor(private appTitleService: Title) {
    appTitleService.setTitle('Terms & Disclosures · Christopher');
  }

  ngOnInit(): void {
  }

}

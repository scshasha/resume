import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private appTitleService: Title) {
    appTitleService.setTitle('Contact · Christopher');
  }
  ngOnInit(): void {
  }

}

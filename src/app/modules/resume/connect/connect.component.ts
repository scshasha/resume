import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private appTitleService: Title) {
    // appTitleService.setTitle('Contact · Christopher');
  }
  ngOnInit(): void {
  }

}

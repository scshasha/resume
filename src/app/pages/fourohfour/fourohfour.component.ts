import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.scss']
})
export class FourohfourComponent implements OnInit {

  constructor(private appTitleService: Title) {
    appTitleService.setTitle('Page not found · Christopher');
  }

  ngOnInit(): void {
  }

}

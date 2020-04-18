import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Returns custom string year replacement.
   * @param value
   */
  copyrightYear(value: any) {
    let year: any = '';
    switch (value) {
      case 2020:
      case '2020':
        year = 'twentytwenty';
        break;
      case 2021:
      case '2021':
        year = 'twenty21';
        break;
      default:
        year = '\'' + value + '\'';
        break;
    }
    return year;
  }

}

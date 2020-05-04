import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <app-side-nav></app-side-nav>
  `,
  styles: [
  ]
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

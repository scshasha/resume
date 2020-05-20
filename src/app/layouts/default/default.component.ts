import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isSidebarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar($event: any): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent implements OnInit {

  @Output() toggleSideBarNav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dashSideNavToggle() {
    this.toggleSideBarNav.emit();
  }
}

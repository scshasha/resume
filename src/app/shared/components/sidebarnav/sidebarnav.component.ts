import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarnav',
  templateUrl: './sidebarnav.component.html',
  styleUrls: ['./sidebarnav.component.scss']
})
export class SidebarnavComponent implements OnInit {
  public readonly links = [{
    url: 'projects',
    name: 'Projects',
    icon: 'list'
  }, {
    url: 'skills',
    name: 'Skills',
    icon: 'assessment'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

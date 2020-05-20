import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private appTitle: Title,
    private appRouter: Router
  ) { }

  ngOnInit(): void {
  }

  setAppTitle(title: string) {
    this.appTitle.setTitle(title);
  }

  logout($event: MouseEvent) {
    $event.preventDefault();
  }
}

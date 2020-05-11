import {Component, NgZone, OnInit} from '@angular/core';
const MAX_MOBILE_WIDTH_BREAK_POINT = 745;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_MOBILE_WIDTH_BREAK_POINT}px`);
  links: any[] = [
    {name: 'Projects', url: 'projects'},
    {name: 'Skills', url: 'skills'},
  ];
  constructor(private zone: NgZone) {
    // this.mediaMatcher.addListener((mql) => {
    //   zone.run(() => this.mediaMatcher = mql);
    // })
  }

  ngOnInit(): void {
  }

  isMobileDeviceScreen() {
    return this.mediaMatcher.matches;
  }

  appToggleClose(sidenav) {
    if (this.isMobileDeviceScreen()) {
      sidenav.close();
    }
  }
}
